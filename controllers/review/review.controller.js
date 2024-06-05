const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createReview = async (req, res) => {
  const { rating, content } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const review = await db.Review.create({ rating, content }, { transaction: t});

      if (review) {
        // jwt.sign(
        //   { review },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Review added successfully", data: { review, token }, res };
        //     return sendResponse(payload);
        //   }
        // );

        const payload = { status: 200, message: "Review added successfully", data: { review, token }, res };
        return sendResponse(payload);  
      }

      const payload = { status: 409, message: "Review was not added", data: null, res };
      return sendResponse(payload);
    });

  } catch (err) {
    const payload = { status: 401, message: "Server error", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  createReview,
};
