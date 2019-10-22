import { checkLogin, login, loginGuard, logout, signUp } from '../controller/auth';
import { RequestHandler } from 'express';

const express = require('express');
const authRouter = express.Router();

/* GET home page. */


/* Session */
/* create */
authRouter.post('/login', login, <RequestHandler>((req, res, next) => {
    console.log('req,session', req.session);
    console.log('req:sessiondId', req.sessionID);
    res.json({user: req.user});
}));
/* get */
authRouter.get('/check-login', checkLogin);

/* destroy */
authRouter.get('/logout', logout);

/* create user and session */
authRouter.post('/sign-up', signUp);

authRouter.use(loginGuard);

export { authRouter };
