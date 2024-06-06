'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/userservice')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class UserCategoryJunctionTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCategoryJunctionTable.init(attributes, {
    sequelize,
    modelName: 'UserCategoryJunctionTable',
  });
  return UserCategoryJunctionTable;
};
