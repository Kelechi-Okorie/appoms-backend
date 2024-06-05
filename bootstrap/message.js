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
    content: {
      type: DataTypes.TEXT
    },
    senderId: {
      type: DataTypes.INTEGER,
      references: {model: 'Users', key: 'id'}
    },
    recieverId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: { model: 'Projects', key: 'id' }
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
