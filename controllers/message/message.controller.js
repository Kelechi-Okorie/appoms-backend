const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createMessage = async (req, res) => {
  const { content } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const message = await db.Message.create({ content }, { transaction: t});

      if (message) {
        // jwt.sign(
        //   { message },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Message added successfully", data: { message, token }, res };
        //     return sendResponse(payload);
        //   }
        // );

        const payload = { status: 200, message: "Message added successfully", data: { message, token }, res };
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
  createMessage,
};
