'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/project')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'ownerId', as: 'owner'});
      this.belongsTo(models.User, {foreignKey: 'clientId', as: 'client'});
      this.hasMany(models.Review);
      this.hasMany(models.Appointment);
    }
  }
  Project.init(attributes, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
