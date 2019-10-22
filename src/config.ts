import { SessionOptions } from 'express-session';

export const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true
};


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


export const mysqlStoreOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'demo_dev'
};
