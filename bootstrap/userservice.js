module.exports = (Sequelize) => {
  const { DataTypes } = Sequelize;

  return {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Services',
        key: 'id'
      }
    }
  };
}
