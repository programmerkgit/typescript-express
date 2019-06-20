'use strict';

import { QueryInterface } from 'sequelize';

export const up = (queryInterface: QueryInterface, Sequelize: any) => {
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
    /*
       Add reverting commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       return queryInterface.bulkDelete('People', null, {});
     */
};
