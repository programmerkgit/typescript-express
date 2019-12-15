import {SessionOptions} from "express-session";

const host = process.env.SESSION_DB_HOST || "127.0.0.1";
const password = process.env.SESSION_DB_PASS || "";
const username = process.env.SESSION_DB_USER || "root";
const port = process.env.SESSION_DB_PORT || "3306";
const database = process.env.SESSION_DB_DATABASE || "demo";

export const sessionConfig: SessionOptions = {
    secret: "secret",
    resave: true,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // domain:
    },
};


export const sessionStoreOption = {
    host: host,
    port: port,
    user: username,
    password: password,
    database: database,
    schema: {
        tableName: "Sessions"
    }
};
