const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createProject = async (req, res) => {
  const { name, description, address, area } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const project = await db.Project.create({ name, description, address, area }, { transaction: t});

      if (project) {
        // jwt.sign(
        //   { project },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Project added successfully", data: { project, token }, res };
        //     return sendResponse(payload);
        //   }
        // );

        const payload = { status: 200, message: "Project added successfully", data: { project, token }, res };
        return sendResponse(payload);  
      }

      const payload = { status: 409, message: "Project was not added", data: null, res };
      return sendResponse(payload);
    });

  } catch (err) {
    const payload = { status: 401, message: "Server error", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  createProject,
};
