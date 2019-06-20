import { Model, Sequelize } from 'sequelize-typescript';
import { SequelizeConfig } from 'sequelize-typescript/lib/types/SequelizeConfig';
import config = require('../config');

class Mock extends Model<Mock> {

}

const path = require('path');
export const sequelize = new Sequelize(<SequelizeConfig>{
    ...config,
    modelPaths: [ path.join(__dirname, './*.model.ts') ]
});
sequelize.addModels([ Mock ]);

export { Mock };
