import * as passport from 'passport';
import { Strategy } from 'passport-local';
import { User } from './db/models';


passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    User.findOne({where: {email}}).then(user => {
        if (user) {
            if (user.comparePassword(password)) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Incorrect password'});
            }
        } else {
            return done(null, false, {message: 'Incorrect username.'});
        }
    }).catch(err => {
        return done(err);
    });
}));

passport.serializeUser(function (user: User, done) {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    User.findByPk(id).then(user => {
        if (user) {
            done(false, user);
        } else {
            done(null, false);
        }
    }).catch(error => {
        done(error, false);
    });
});


export { passport };


