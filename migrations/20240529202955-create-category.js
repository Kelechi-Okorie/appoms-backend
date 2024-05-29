'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = require('../bootstrap/category')(Sequelize);
    
    await queryInterface.createTable('Categories', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};
