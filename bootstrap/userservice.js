module.exports = (Sequelize) => {
  const { DataTypes } = Sequelize;

  return {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'services',
        key: 'id'
      }
    }
  };
}
