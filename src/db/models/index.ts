import { Sequelize } from 'sequelize-typescript';

import User from './user';

const config = require('../sequelize');
export const sequelize = new Sequelize(config);
sequelize.addModels([ User ]);

export { User };
