'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = require('../bootstrap/servicecategory')(Sequelize);
    await queryInterface.createTable('ServiceCategoryJunctionTables', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ServiceCategoryJunctionTables');
  }
};
