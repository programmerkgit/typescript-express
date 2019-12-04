const NODE_ENV = process.env.NODE_ENV || 'dev';
<<<<<<< HEAD
const MYSQL_HOST = process.env.MYSQL_HOST || '127.0.0.1';
const database = 'demo';
const config = <any>{
    'dev': {
        'username': 'root',
        'password': '',
        'database': database + '_dev',
        'host': 'localhost',
        port: 3306,
        'dialect': 'mysql'
    },
    'test': {
        'username': 'root',
        'password': '',
        'database': database + '_test',
        'host': '127.0.0.1',
        port: 3306,
        'dialect': 'localhost'
    },
    'prod': {
        'username': 'root',
        'password': '',
        'database': database + '_prod',
        port: 3306,
        'host': '127.0.0.1',
        'dialect': 'localhost'
    }
=======
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
>>>>>>> 76c234a547a87b27965b3372908e2992882f8a19
};


// dev
// mysql => docker + volume
// container => not use.
// test
// mysql => container. same as dev mysql container
// production => single container
