const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const category = await db.Category.create({ name, description }, { transaction: t});

      if (category) {
        // jwt.sign(
        //   { category },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Category created successfully", data: { category, token }, res };
        //     return sendResponse(payload);
        //   }
        // );

        const payload = { status: 200, message: "Category created successfully", data: { category, token }, res };
        return sendResponse(payload);  
      }

      const payload = { status: 409, message: "Category was not created", data: null, res };
      return sendResponse(payload);
    });

  } catch (err) {
    const payload = { status: 401, message: "Server error", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  createCategory,
};
