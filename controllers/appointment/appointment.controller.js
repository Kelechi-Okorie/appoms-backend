const db = require("../../models/index");
const jwt = require("jsonwebtoken");

const { sendResponse } = require("../../filters/sendResponse.filter");

const createAppointment = async (req, res) => {
  const { address, area, startTime, endTime } = req.body;

  try {
    const result = db.sequelize.transaction(async (t) => {
      const appointment = await db.Appointment.create({ address, area, startTime, endTime }, { transaction: t});

      if (appointment) {
        // jwt.sign(
        //   { appointment },
        //   process.env.JWT_TOKEN,
        //   { expiresIn: "1d" },
        //   async (err, token) => {
        //     if (err) throw err;

        //     const payload = { status: 200, message: "Appointment booked successfully", data: { service, token }, res };
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
  createAppointment,
};
