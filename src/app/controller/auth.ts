import { RequestHandler } from 'express-serve-static-core';
import { Session, User } from '../../db/models';
import { config } from '../../config';
import { passport } from '../../passport';
//
// export const login: RequestHandler = ((req, res, next) => {
//     const body = req.body;
//     const email = body.email;
//     const password = body.password;
//     User.findOne({where: {email: email}}).then(user => {
//         if (user) {
//             if (user.comparePassword(password)) {
//                 return Session.destroy({where: {userId: user.id}}).then(count => {
//                     res.clearCookie('sessionId');
//                     return Session.create({userId: user.id}).then(session => {
//                         res.cookie('sessionId', session.id, config.cookieOptions);
//                         res.json({result: true});
//                     });
//                 });
//             } else {
//                 res.json({result: false, reason: '_dev_ wrong password'});
//             }
//         } else {
//             res.json({result: false, reason: '_dev_ no email'});
//         }
//     }).catch(next);
// });

export const login: RequestHandler = passport.authenticate('local');

export const logout: RequestHandler = ((req, res, next) => {
    const sessionId = req.signedCookies[ 'sessionId' ];
    Session.destroy(sessionId).then(session => {
        if (session) {
            res.clearCookie('sessionId');
            res.json({result: true});
        }
    }).catch(next);
});

export const signUp: RequestHandler = ((req, res, next) => {
    const body = req.body;
    const email = body.email;
    const password = body.password;
    User.create({email, password}).then(user => {
        if (user) {
            res.clearCookie('sessionId');
            return Session.create({userId: user.id}).then(session => {
                res.cookie('sessionId', session.id, config.cookieOptions);
                res.json({result: true});
            });
        } else {
            res.json({result: false, reason: 'user not created'});
        }
    }).catch(next);
});


export const checkLogin: RequestHandler = ((req, res, next) => {
    const sessionId = req.signedCookies[ 'sessionId' ];
    Session.findByPk(sessionId).then(session => {
        if (session) {
            res.cookie('sessionId', session.id, config.cookieOptions);
            res.json({result: true});
        } else {
            res.json({result: false});
        }
    }).catch(next);
});

export const loginGuard: RequestHandler = (req, res, next) => {
    const sessionId = req.signedCookies[ 'sessionId' ];
    Session.scope('user').findByPk(sessionId).then(session => {
        if (session) {
            res.locals.user = session.user;
            res.locals.userId = session.user.id;
            res.cookie('sessionId', session.id, config.cookieOptions);
            next();
        } else {
            res.json({result: false});
        }
    });
};
