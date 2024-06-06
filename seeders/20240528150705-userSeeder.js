'use strict';

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const users = [];
    const numUsers = 5;

    for (let i = 0; i < numUsers; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      let isAdmin = false;

      if (i <= 5) {
        isAdmin = true;
      }

      const email = (`${firstName}-${lastName}${i}@gmail.com`).toLowerCase();

      users.push({
        firstName: lastName,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync(email, bcrypt.genSaltSync(12)),
        phone: faker.phone.number(),
        dob: faker.date.past(),
        address: `${faker.location.street()}, ${faker.location.state()}, ${faker.location.city()}`,
        officeAddress: `${faker.location.street()}, ${faker.location.state()}, ${faker.location.city()}`,
        isAdmin: isAdmin,
        config: '{"hasChangedPassword": false}',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('users', users);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
