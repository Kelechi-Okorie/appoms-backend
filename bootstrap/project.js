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
    name: {
      type: DataTypes.STRING(191)
    },
    description: {
      type: DataTypes.TEXT
    },
    address: {
      type: DataTypes.TEXT
    },
    area: {
      type: DataTypes.STRING(191)
    },
    serviceId: {
      type: DataTypes.INTEGER,
      references: {model: 'Services', key: 'id'}
    },
    ownerId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    clientId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    isOpen: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    isRecurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
