import passport = require("passport");
import {Strategy} from "passport-local";
import {User} from "./db/models";


passport.use(new Strategy({
    usernameField: "email",
    passwordField: "password"
}, (email, password, done) => {
    User.findOne({where: {email: email}}).then(user => {
        if (user) {
            if (user.comparePassword(password)) {
                console.log("Login success");
                return done(null, user);
            } else {
                return done(null, false, {message: "Incorrect password"});
            }
        } else {
            return done(null, false, {message: "Incorrect username."});
        }
    }).catch((err: any) => {
        return done(err);
    });
}));

passport.serializeUser(function (user: User, done) {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    User.findByPk(id).then(user => {
        if (user) {
            done(null, user);
        } else {
            done(false, false);
        }
    }).catch(error => {
        done(error, false);
    });
});


export {passport};


