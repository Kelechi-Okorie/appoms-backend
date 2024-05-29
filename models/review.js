'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/review')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      this.belongsTo(models.User, { foreignKey: 'reviewerId', as: 'reviewer' });
      this.belongsTo(models.Project);
    }
  }
  Review.init(attributes, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
