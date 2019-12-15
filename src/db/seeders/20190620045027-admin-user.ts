"use strict";

import {QueryInterface} from "sequelize";
import {User} from "../models/index";

const email = "admin@example.com";
const password = "Admin1234";

export const up = (queryInterface: QueryInterface, Sequelize: any) => {
    return User.create({email, password});
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
        where: {email}
    });
    /*
       Add reverting commands here.
       Return a promise to correctly handle asynchronicity.

       Example:
       return queryInterface.bulkDelete('People', null, {});
     */
};
