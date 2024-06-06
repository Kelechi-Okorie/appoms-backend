'use strict';

const { faker } = require('@faker-js/faker');

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

    const services = [];
    const numServices = 5;

    const t = ['capentry', 'plumbing', 'electrician', 'painting', 'cleaning'];
    
    for (let i = 0; i < numServices; i++) {

      services.push({
        categoryId: faker.helpers.arrayElement([1, 2]),
        name: t[i],
        description: 'This is the description for the work',
      });
    }

    await queryInterface.bulkInsert('services', services);

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
