import { checkLogin, login, logout, signUp } from '../controller/auth';
import { RequestHandler } from 'express';
import { Session } from '../../db/models';

const express = require('express');
const authRouter = express.Router();

/* GET home page. */

/* Session */
/* create */
authRouter.post('/login', login, <RequestHandler>((req, res, next) => {
    Session.findOne().then(sessio => {
        res.json({user: req.user});
    }).catch(error => {
        console.log(error);
    });
}));
/* get */
authRouter.get('/check-login', checkLogin);

/* destroy */
authRouter.get('/logout', logout);

/* create user and session */
authRouter.post('/sign-up', signUp);

export { authRouter };
