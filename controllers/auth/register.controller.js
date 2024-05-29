const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const registerUser = async (req, res) => {
  const { firstName, lastName, phone, email, password, isAdmin } = req.body;
  const lowerCaseEmail = email.toLowerCase();

  try {
    const result = db.sequelize.transaction(async (t) => {
      const [user, isNewUser] = await db.User.findOrCreate({
        where: {
          email: lowerCaseEmail,
        },
        defaults: {
          firstName,
          lastName,
          phone,
          password
        },
        transaction: t,
      });

      if (isNewUser) {
        jwt.sign(
          { user },
          process.env.JWT_TOKEN,
          { expiresIn: "1d" },
          async (err, token) => {
            if (err) throw err;

            const payload = { status: 200, message: "User registered successfully", data: { user, token }, res };
            sendResponse(payload);
            return;

          }
        );
      }

      const payload = { status: 409, message: "A user already exists with this email", data: null, res };
      sendResponse(payload);
      return;
    });

  } catch (err) {
    const payload = { status: 401, message: "Server error", data: null, res };
    sendResponse(payload);
    return;

  }
};

module.exports = {
  registerUser,
};
