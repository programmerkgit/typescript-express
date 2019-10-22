'use strict';

import { QueryInterface } from 'sequelize';
import { User } from '../models/index';

export const up = (queryInterface: QueryInterface, Sequelize: any) => {
    return User.create({
        email: 'k.kubo.private.mobile@gmail.com',
        password: 'a'
    });
    /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.bulkInsert('People', [{
           name: 'John Doe',
           isBetaMember: false
         }], {});
       */
};
export const down = (queryInterface: QueryInterface, Sequelize: any) => {
    return User.destroy({
        where: {
            email: 'k.kubo.private.mobile@gmail.com'
        }
    });
    /*
       Add reverting commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       return queryInterface.bulkDelete('People', null, {});
     */
};
