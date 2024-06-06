const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createService = async (req, res) => {
  const { name, description } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const service = await db.Service.create({ name, description }, { transaction: t});

      if (service) {
        // jwt.sign(
        //   { service },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Service created successfully", data: { service, token }, res };
        //     return sendResponse(payload);
        //   }
        // );

        const payload = { status: 200, message: "Service created and added successfully", data: { service, token }, res };
        return sendResponse(payload);  
      }

      const payload = { status: 409, message: "Message was not added", data: null, res };
      return sendResponse(payload);
    });

  } catch (err) {
    const payload = { status: 401, message: "Server error", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  createService,
};
