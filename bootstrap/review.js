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
    rating: {
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    reviewerId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    projectId: {
      type: DataTypes.INTEGER,
      references: { model: 'projects', key: 'id' }
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
