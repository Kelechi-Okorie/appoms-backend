const { sequelize, User, Category } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllCategories = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const categories = await Category.findAll({ transaction: t });

      const payload = { status: 200, message: "Users fetched successfully", data: { categories }, res };
      return sendResponse(payload);
    });

  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

const getCategory = async (req, res) => {
  try {

    const { query, params } = req;

    const { id } = params;

    const category = await Category.findByPk(id);

    const payload = { status: 200, message: "Category fetched successfully", data: { category }, res };
    return sendResponse(payload);
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

const getCategoryServices = async (req, res) => {
  try {

    const { query, params } = req;

    const { id } = params;

    const category = await Category.findByPk(id);
    const services = await category.getServices();

    const payload = { status: 200, message: "Category services fetched successfully", data: { services }, res };
    return sendResponse(payload);
    
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

const createNewCategory = async (req, res) => {

  try {
    const result = sequelize.transaction(async (t) => {
      const { body } = req;

      const category = await Category.create(body, { transaction: t });

      const payload = { status: 200, message: "Category created successfully", data: { category }, res };
      return sendResponse(payload);
    });
  } catch (err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createNewCategory,
  getCategoryServices
};
