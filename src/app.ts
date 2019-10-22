import { authRouter } from './app/routes/auth';
import { ErrorRequestHandler, RequestHandler } from 'express';
import { corsOptions, sessionConfig } from './config';
import { passport } from './passport';

const session = require('express-session');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
// @ts-ignore
export const app = express();
const cors = require('cors');
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());

app.use(cors(corsOptions));
app.use(sassMiddleware({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(session(sessionConfig));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(<RequestHandler>function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(<ErrorRequestHandler>function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.log(err);
    res.status(err.status || 500);
    res.render('error');
});

