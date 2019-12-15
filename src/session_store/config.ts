import {SessionOptions} from 'express-session';

export const sessionConfig: SessionOptions = {
    secret: 'secret',
    resave: true,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // domain:
    },
};

const NODE_ENV = process.env.NODE_ENV || 'dev';
const host = process.env.MYSQL_HOST || '127.0.0.1';
const password = process.env.MYSQL_PASS || '';
const username = process.env.MYSQL_USER || 'root';
const port = process.env.MYSQL_PORT || '3306';
const database = process.env.MYSQL_DATABASE || 'demo';

export const sessionStoreOption = {
    host: host,
    port: port,
    user: username,
    password: password,
    database: database + '_' + NODE_ENV,
    schema: {
        tableName: 'Sessions'
    }
};
