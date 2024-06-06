const { sequelize, User } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllUsers = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const users = await User.findAll({ transaction: t });

      const payload = { status: 200, message: "Users fetched successfully", data: { users }, res };
      return sendResponse(payload);
    });

  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
}

const getUser = async (req, res) => {
  const { query, params } = req;

  const { id } = params;

  const user = await User.findByPk(id);

  const payload = { status: 200, message: "Users fetched successfully", data: { user }, res };
  return sendResponse(payload);
}

module.exports = {
  getAllUsers,
  getUser
};
