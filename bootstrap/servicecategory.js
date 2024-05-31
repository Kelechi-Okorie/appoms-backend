module.exports = (Sequelize) => {
  const { DataTypes } = Sequelize;

  return {
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  };
}
