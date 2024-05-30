'use strict';

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

    await queryInterface.bulkInsert('projects', [
      {
        name: 'Project 1',
        description: 'This is the description for the project',
        address: 'This is the address for the project',
        area: 'This is the area for the project',
        serviceId: 1,
        ownerId: 1,
        clientId: 2,
      },
      {
        name: 'Project 2',
        description: 'This is the description for the project',
        address: 'This is the address for the project',
        area: 'This is the area for the project',
        serviceId: 2,
        ownerId: 3,
        clientId: 4,
      }
    ]);
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
