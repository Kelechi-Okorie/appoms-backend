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
};

const addServicesToUser = async (req, res) => {
  try {
    const { services, userId } = req.body;

    const result = sequelize.transaction(async (t) => {
      const user = await User.findByPk(userId, { transaction: t });
      await user.setServices(services, { transaction: t });

      const payload = { status: 200, message: "Services created successfully", data: { user }, res };
      return sendResponse(payload);
    });


  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);

  }
}

const addDescription = async (req, res) => {
  try {
    const { description, userId } = req.body;

    const result = sequelize.transaction(async (t) => {
      const user = await User.findByPk(userId, { transaction: t });
      await user.update({description}, { transaction: t });

      const payload = { status: 200, message: "description successfully", data: { user }, res };
      return sendResponse(payload);
    });


  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);

  }
};

const getUserServices = async (req, res) => {
  try {

    const { query, params } = req;

    const { id } = params;

    const user = await User.findByPk(id);
    const services = await user.getServices();

    const payload = { status: 200, message: "User services fetched successfully", data: { services }, res };
    return sendResponse(payload);
    
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addServicesToUser,
  addDescription,
  getUserServices
};
