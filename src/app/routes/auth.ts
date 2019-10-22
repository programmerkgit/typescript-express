import { signUp } from '../controller/auth';
import { passport } from '../../passport';
import { RequestHandler } from 'express';

const express = require('express');
const authRouter = express.Router();

/* GET home page. */


/* Session */
/* create */
authRouter.post('/login', passport.authenticate('local'), <RequestHandler>((req, res, next) => {
    res.json({user: req.user});
}));
/* get */
// authRouter.get('/check-login', checkLogin);
/* destroy */
authRouter.get('/logout', <RequestHandler>((req, res, next) => {
    req.logOut();
    res.json({result: true});
}));

/* create user and session */
authRouter.post('/sign-up', signUp);

// authRouter.use(loginGuard);

export { authRouter };
