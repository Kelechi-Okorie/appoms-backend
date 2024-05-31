'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/appointment')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'userId', as: 'appointment'});
      this.belongsTo(models.User, { foreignKey: 'clientId', as: 'client'});
      this.belongsTo(models.Project);
    }
  }
  Appointment.init(attributes, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
