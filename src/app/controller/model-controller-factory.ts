import { RequestHandler } from 'express';
import { ConnectionError, ValidationError } from 'sequelize';
import { NextFunction, Request, Response } from 'express-serve-static-core';

const path = require('path');

export const findAllFactory = (model): RequestHandler => {
    return <RequestHandler>(req: Request, res: Response, next: NextFunction) => {
        const options = req.query || {};
        const scopes = options.scopes || [];
        const connector = scopes.length ? model.scope(scopes) : model;
        connector.findAll(options).then(instances => {
            res.json(instances);
        }).catch(error => {
            next(error);
        });
    };
};

export const findByIdFactory = (model): RequestHandler => {
    return <RequestHandler>(req, res, next) => {
        const id = req.params.id;
        const options = req.query || {};
        const scopes = options.scopes || [];
        const connector = scopes.length ? model.scope(scopes) : model;
        connector.findById(id, options).then(instance => {
            if (instance) {
                res.json(instance);
            } else {
                console.error(`${ model.name } INSTANCE NOT FOUND`);
                res.sendStatus(404);
            }
        }).catch(error => {
            next(error);
        });
    };
};

export const updateFactory = (model): RequestHandler => {
    return <RequestHandler>((req, res, next) => {
        const id = req.params.id;
        const options = req.query || {};
        const scopes = options.scopes || [];
        const values = req.body;
        const connector = scopes.length ? model.scope(scopes) : model;
        connector.findById(id, options).then(instance => {
            if (instance) {
                instance.update(values, {
                    fields: options.fields
                }).then(updated => {
                    console.error(typeof updated.getDataValue('data'));
                    res.json(updated);
                }).catch(next);
            } else {
                res.sendStatus(404);
            }
        }).catch(ValidationError, error => {
            res.sendStatus(403);
        }).catch(next);
    });
};

export const createFactory = (model): RequestHandler => {
    return <RequestHandler>((req, res, next) => {
        const options = res.locals.options;
        const values = req.body;
        model.create(values, options).then(instance => {
            res.status(201);
            res.header('Location', path.join('/api', model.tableName.toLowerCase(), instance.id.toString()));
            res.json(instance);
        }).catch(ConnectionError, error => {
            /* ValidationError ETC */
            console.error(error);
            res.sendStatus(503);
        }).catch(ValidationError, error => {
            console.error(error);
            res.sendStatus(403);
        }).catch(next);

    });
};


export const destroyFactory = (model): RequestHandler => {
    return <RequestHandler>((req, res, next) => {
        const id = req.params.id;
        model.findById(id).then(instance => {
            if (instance) {
                instance.destroy().then(() => {
                    /* Should Not Show Updated Fields */
                    res.end();
                }).catch(next);
            } else {
                res.sendStatus(404);
            }
        }).catch(ValidationError, error => {
            console.error(error);
            res.sendStatus(403);
        });
    });
};
