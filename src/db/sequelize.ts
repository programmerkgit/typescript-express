const NODE_ENV = process.env.NODE_ENV || 'dev';
const host = process.env.MYSQL_HOST || '127.0.0.1';
const password = process.env.MYSQL_PASS || '';
const username = process.env.MYSQL_USER || 'root';
const port = process.env.MYSQL_PORT || '3306';
const database = process.env.MYSQL_DATABASE || 'demo';
export = {
    username: username,
    password: password,
    database: database + '_' + NODE_ENV,
    host: host,
    port: port,
    dialect: 'mysql'
};


// dev
// mysql => docker + volume
// container => not use.
// test
// mysql => container. same as dev mysql container
// production => single container
