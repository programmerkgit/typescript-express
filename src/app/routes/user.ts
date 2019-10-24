import {signUp} from '../controller/auth';
import {passport} from '../../passport';
import {RequestHandler} from 'express';
import {ModelApiFactory} from "../controller/model-controller-factory";
import {User} from "../../db/models";

const express = require('express');
export const userRouter = express.Router();

/* GET home page. */

const modelApi = ModelApiFactory(User)

userRouter.use('*', <RequestHandler>((req, res, next) => {
    console.info('users router is called');
    next()
}));

userRouter.get('/', <RequestHandler>((req, res, next) => {
    modelApi.findAll(req, res, next)
}));

userRouter.get('/:id', <RequestHandler>((req, res, next) => {
    modelApi.findByPk(req, res, next)
}));

userRouter.delete('/:id', <RequestHandler>((req, res, next) => {
    modelApi.delete(req, res, next)
}));

userRouter.put(':/id', <RequestHandler>((req, res, next) => {
    modelApi.update(req, res, next)
}));


userRouter.post('', <RequestHandler>((req, res, next) => {
    modelApi.create(req, res, next)
}));
