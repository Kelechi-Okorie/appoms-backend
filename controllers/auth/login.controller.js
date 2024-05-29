const db = require("../../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("../../filters/sendResponse.filter");

const passwordMatch = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  // const lowerCaseEmail = email.toLowerCase();

  try {
    const user = await db.User.scope(null).findOne({
      where: { email },
    });

    if (user && passwordMatch(password, user.password)) {
      const token = jwt.sign(
        { user },
        process.env.JWT_TOKEN,
        { expiresIn: "10d" },
        // async (err, token) => {
        //   if (err) throw err;

        //   const payload = { status: 200, message: "Login successful", data: { user, token }, res };
        //   return sendResponse(payload);
        // }
      );
      const payload = { status: 200, message: "Login successful", data: { user, token }, res };
      return sendResponse(payload);

    }

    const payload = { status: 400, message: "Wrong email or password", data: null, res };
    return sendResponse(payload);

  } catch (err) {
    const payload = { status: 501, message: "Server error", data: null, res };
    return sendResponse(payload);
  }
};

module.exports = {
  signInUser,
};
