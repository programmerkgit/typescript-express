import { Sequelize } from 'sequelize-typescript';

import User from './user';
import Session from './session';

const config = require('../sequelize');
export const sequelize = new Sequelize(config);
sequelize.addModels([ User, Session ]);

export { User, Session };
