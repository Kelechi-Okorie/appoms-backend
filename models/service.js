'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/service')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: models.UserServiceJunctionTable});
      this.belongsTo(models.Category);
    }
  }
  Service.init(attributes, {
    sequelize,
    modelName: 'Service',
    timestamps: false
  });
  return Service;
};
