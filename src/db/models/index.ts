import { Sequelize } from 'sequelize-typescript';
import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';
import User from './user';
import Session from './session';
import config = require('../sequelize-config');

const path = require('path');
export const sequelize = new Sequelize(<SequelizeConfig>{
    ...config,
    modelPaths: [ path.join(__dirname, './*.model.ts') ]
});
sequelize.addModels([ User, Session ]);

export { User, Session };
