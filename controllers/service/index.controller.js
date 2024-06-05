const { sequelize, Service } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllServices = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const services = await Service.findAll({ transaction: t });
      
      const payload = { status: 200, message: "Users fetched successfully", data: { services }, res };
      return sendResponse(payload);
    });

  } catch(err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
}

module.exports = {
  getAllServices
};
;
