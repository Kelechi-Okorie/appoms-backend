const { sequelize, Service, Category } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();

    const payload = { status: 200, message: "Users fetched successfully", data: { services }, res };
    return sendResponse(payload);

  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

const getService = async (req, res) => {
  try {

    const { query, params } = req;

    const { id } = params;

    const service = await Service.findByPk(id);

    const payload = { status: 200, message: "Service fetched successfully", data: { service }, res };
    return sendResponse(payload);
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

const createNewService = async (req, res) => {

  try {
    const result = sequelize.transaction(async (t) => {
      const { body } = req;
      
      const category = await Category.findOne({ where: { name: body.category }, transaction: t});

      const service = await Service.create(body, { transaction: t });
      await service.setCategory(category, { transaction: t });
      await service.reload({transaction: t});

      const payload = { status: 200, message: "Service created successfully", data: { service }, res };
      return sendResponse(payload);
    });
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};


module.exports = {
  getAllServices,
  getService,
  createNewService
};
