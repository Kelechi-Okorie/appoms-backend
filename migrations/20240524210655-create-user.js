'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {

    const userAttributes = require('../bootstrap/user')(Sequelize);
    await queryInterface.createTable('Users', userAttributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
