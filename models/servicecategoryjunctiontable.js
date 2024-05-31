'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/servicecategory')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class ServiceCategoryJunctionTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceCategoryJunctionTable.init(attributes, {
    sequelize,
    modelName: 'ServiceCategoryJunctionTable',
  });
  return ServiceCategoryJunctionTable;
};
