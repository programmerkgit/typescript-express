import {RequestHandler} from 'express';
import {ConnectionError, ValidationError} from 'sequelize';
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {Model} from "sequelize-typescript";
import {User} from "../../db/models";

const path = require('path');

export interface ModelApi {
    findAll: RequestHandler;
    findByPk: RequestHandler;
    update: RequestHandler;
    create: RequestHandler;
    delete: RequestHandler;
}

export function ModelApiFactory<T extends Model<T>>(model: (new () => T) & typeof Model): ModelApi {
    return {
        findAll: <RequestHandler>((req, res, next) => {
            const options = req.query || {};
            const scopes = options.scopes || [];
            const connector = scopes.length ? model.scope(scopes) : model;
            connector.findAll<T>(options).then((instances: any) => {
                res.json(instances);
            }).catch((error: Error) => {
                next(error);
            });
        }),
        findByPk: <RequestHandler>((req, res, next) => {
            const id = req.params.id;
            const options = req.query || {};
            const scopes = options.scopes || [];
            const connector = scopes.length ? model.scope(scopes) : model;
            connector.findByPk<T>(id, options).then((instance: any) => {
                if (instance) {
                    res.json(instance);
                } else {
                    console.error(`${model.name} INSTANCE NOT FOUND`);
                    res.sendStatus(404);
                }
            }).catch((error: Error) => {
                next(error);
            });
        }),
        update: <RequestHandler>((req, res, next) => {
            const id = req.params.id;
            const options = req.query || {};
            const scopes = options.scopes || [];
            const values = req.body;
            const connector = scopes.length ? model.scope(scopes) : model;
            connector.findByPk<T>(id, options).then((instance: any) => {
                if (instance) {
                    instance.update(values, {
                        fields: options.fields
                    }).then((updated: any) => {
                        console.error(typeof updated.getDataValue('data'));
                        res.json(updated);
                    }).catch(next);
                } else {
                    res.sendStatus(404);
                }
            }).catch(ValidationError, (error: Error) => {
                res.sendStatus(403);
            }).catch(next);
        }),
        create: <RequestHandler>((req, res, next) => {
            const options = res.locals.options;
            const values = req.body;
            model.create(values, options).then((instance: any) => {
                res.status(201);
                res.header('Location', path.join('/api', model.tableName.toLowerCase(), instance.id.toString()));
                res.json(instance);
            }).catch(ConnectionError, (error: Error) => {
                /* ValidationError ETC */
                console.error(error);
                res.sendStatus(503);
            }).catch(ValidationError, (error: Error) => {
                console.error(error);
                res.sendStatus(403);
            }).catch(next);
        }),
        delete: <RequestHandler>((req, res, next) => {
            const id = req.params.id;
            model.findByPk(id).then((instance: any) => {
                if (instance) {
                    instance.destroy().then(() => {
                        /* Should Not Show Updated Fields */
                        res.end();
                    }).catch(next);
                } else {
                    res.sendStatus(404);
                }
            }).catch(ValidationError, (error: Error) => {
                console.error(error);
                res.sendStatus(403);
            });
        }),
    }
}
