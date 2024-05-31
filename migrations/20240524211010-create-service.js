'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = require('../bootstrap/service')(Sequelize);
    
    await queryInterface.createTable('Services', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};
