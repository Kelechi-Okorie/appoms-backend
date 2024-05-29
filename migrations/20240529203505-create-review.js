'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = require('../bootstrap/review')(Sequelize);

    await queryInterface.createTable('Reviews', attributes);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};
