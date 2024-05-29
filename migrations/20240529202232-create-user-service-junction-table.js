'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = require('../bootstrap/userservice')(Sequelize);

    await queryInterface.createTable('UserServiceJunctionTables', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserServiceJunctionTables');
  }
};
