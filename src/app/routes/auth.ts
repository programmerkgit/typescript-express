import {checkLogin, login, logout, signUp} from '../controller/auth';
import {RequestHandler} from 'express';


const express = require('express');
const authRouter = express.Router();

/* GET home page. */

/* Session */
/* create */
authRouter.post('/login', login, <RequestHandler>((req, res, next) => {
    /* TODO: determine auth api */
    res.end();
}));

/* check if session is alive */
authRouter.get('/check-login', checkLogin);

/* destroy session */
authRouter.get('/logout', logout);

/* create user */
authRouter.post('/sign-up', signUp);

export {authRouter};
