import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';

interface SQLSetting {
    [ prop: string ]: SequelizeConfig
}

const setting: SQLSetting = {
    'dev': {
        'username': 'root',
        'password': '',
        'database': 'database_development',
        'host': '127.0.0.1',
        'dialect': 'mysql'
    },
    'test': {
        'username': 'root',
        'password': '',
        'database': 'database_test',
        'host': '127.0.0.1',
        'dialect': 'mysql'
    },
    'prod': {
        'username': 'root',
        'password': '',
        'database': 'database_production',
        'host': '127.0.0.1',
        'dialect': 'mysql'
    }
};

const sequelizeConfig = setting[ <string>process.env.NODE_ENV || 'dev' ];
export = sequelizeConfig;
