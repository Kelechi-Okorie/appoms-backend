module.exports = (Sequelize) => {
  const { DataTypes } = Sequelize;

  return {
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Services',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      }
    }
  };
}
