const { sequelize, Project } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllProjects = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const projects = await Project.findAll({ transaction: t });
      
      const payload = { status: 200, message: "Users fetched successfully", data: { projects }, res };
      return sendResponse(payload);
    });

  } catch(err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
}

module.exports = {
  getAllProjects
};
;
