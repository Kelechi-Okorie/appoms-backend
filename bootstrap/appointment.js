const bcrypt = require('bcrypt');

module.exports = (Sequelize) => {
  const { DataTypes } = Sequelize;

  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.TEXT
    },
    area: {
      type: DataTypes.STRING(191)
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: {model: 'projects', key: 'id'}
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    clientId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    startTime: {
      type: DataTypes.DATE
    },
    endTime: {
      type: DataTypes.DATE
    },
    createdAt: {
      type: DataTypes.DATE,
      set(value) {
        this.setDataValue('createdAt', new Date());
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      set(value) {
        this.setDataValue('updatedAt', new Date);
      },
    }
  }
}
