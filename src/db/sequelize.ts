const NODE_ENV = process.env.NODE_ENV || 'dev';
const MYSQL_HOST = process.env.MYSQL_HOST || '127.0.0.1';
const database = 'demo';
const config = <any>{
    'dev': {
        'username': 'root',
        'password': '',
        'database': database + '_dev',
        'host': '127.0.0.1',
        port: 3306,
        'dialect': 'mysql'
    },
    'test': {
        'username': 'root',
        'password': '',
        'database': database + '_test',
        'host': '127.0.0.1',
        port: 3306,
        'dialect': 'mysql'
    },
    'prod': {
        'username': 'root',
        'password': '',
        'database': database + '_prod',
        port: 3306,
        'host': '127.0.0.1',
        'dialect': 'mysql'
    }
};
export = config[ NODE_ENV ];

// dev
// mysql => docker + volume
// container => not use.
// test
// mysql => container. same as dev mysql container
// production => single container
