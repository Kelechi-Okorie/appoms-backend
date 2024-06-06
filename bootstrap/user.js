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
    email: {
      type: DataTypes.STRING(191),
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(191),
      // defaultValue: bcrypt.hashSync(getDataValue("userName"), bcrypt.genSaltSync(12)),
      set(value) {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
      }
    },
    phone: {
      type: DataTypes.STRING(191)
    },
    firstName: {
      type: DataTypes.STRING(191)
    },
    lastName: {
      type: DataTypes.STRING(191)
    },
    dob: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    address: {
      type: DataTypes.STRING(191)
    },
    area: {
      type: DataTypes.STRING(191),
    },
    officeAddress: {
      type: DataTypes.STRING(191)
    },
    description: {
      type: DataTypes.STRING
    },
    lastLoginAt: {
      type: DataTypes.BOOLEAN
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    disablingReason: {
      type: DataTypes.STRING
    },
    disablingUserId: {
      type: DataTypes.INTEGER
    },
    disabledAt: {
      type: DataTypes.DATE
    },
    imagePath: {
      type: DataTypes.STRING
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    config: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("config"));
      },
      set: function (value) {
        return this.setDataValue("config", JSON.stringify(value));
      },
      defaultValue: '{"hasChangedPassword":false}'
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
    },
    deletedAt: {
      type: DataTypes.DATE,
      set(value) {
        this.setDataValue('createdAt', new Date());
      }
    },
  }
}
