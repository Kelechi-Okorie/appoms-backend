'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const userAttributes = require('../bootstrap/user')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Category, {through: models.UserCategoryJunctionTable})
      this.belongsToMany(models.Service, { through: models.UserServiceJunctionTable });
      this.hasMany(models.Project, { foreignKey: 'ownerId', as: 'owner' });
      this.hasMany(models.Project, { foreignKey: 'clientId', as: 'client' });
      this.hasMany(models.Review, { foreignKey: 'userId', as: 'review' });
      this.hasMany(models.Review, { foreignKey: 'reviewerId', as: 'reviewer' });
      this.hasMany(models.Message, { foreignKey: 'senderId', as: 'sender' });
      this.hasMany(models.Message, { foreignKey: 'receiverId', as: 'reciever' });
      this.hasMany(models.Appointment, { foreignKey: 'userId', as: 'appointment' });
      this.hasMany(models.Appointment, { foreignKey: 'clientId', as: 'appointmentClient' });
    }
  }
  User.init({
    ...userAttributes,

    // Virtual fields
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
