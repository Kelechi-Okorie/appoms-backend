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
    updatedAt: {
      type: DataTypes.DATE,
      set(value) {
        this.setDataValue('updatedAt', new Date);
      },
    }
  }
}
