'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const attributes = require('../bootstrap/category')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: models.UserCategoryJunctionTable});
      this.hasMany(models.Service,);
    }
  }
  Category.init(attributes, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
