'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/message')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'senderId', as: 'sender'});
      this.belongsTo(models.User, {foreignKey: 'receiverId', as: 'receiver'});
    }
  }
  Message.init(attributes, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
