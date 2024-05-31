'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    const attributes = require('../bootstrap/appointment')(Sequelize);

    await queryInterface.createTable('Appointments', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};
