import { RequestHandler } from 'express-serve-static-core';
import { User } from '../../db/models';
import { passport } from '../../passport';

export const login: RequestHandler = passport.authenticate('local');

export const signUp: RequestHandler = ((req, res, next) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    User.create({email, password}).then(user => {
        if (user) {
            req.logIn(user, err => {
                if (err) {
                    return next(err);
                }
                return res.json({result: 'sig nup Success'});
            });
        } else {
            res.json({result: false, reason: 'user not created'});
        }
    }).catch(next);
});


export const checkLogin: RequestHandler = ((req, res, next) => {
    if (req.user) {
        res.json({result: true});
    } else {
        res.json({result: false});
    }
});

export const loginGuard: RequestHandler = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        return res.json({result: false});
    }
};
