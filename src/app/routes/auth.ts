import { checkLogin, loginGuard, logout, signUp } from '../controller/auth';
import { passport } from '../../passport';

const express = require('express');
const authRouter = express.Router();

/* GET home page. */


/* Session */
/* create */
authRouter.post('/login', passport.authenticate('local', {
    failureFlash: 'failure flash',
    successRedirect: '/',
    failureRedirect: '/login',
}));
/* get */
authRouter.get('/check-login', checkLogin);
/* destroy */
authRouter.get('/logout', logout);

/* create user and session */
authRouter.post('/sign-up', signUp);

authRouter.use(loginGuard);

export { authRouter };
