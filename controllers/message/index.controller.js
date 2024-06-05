const { sequelize, Message } = require('../../models');
const { sendResponse } = require('../../filters/sendResponse.filter');

const getAllMessages = async (req, res) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const messages = await Message.findAll({ transaction: t });
      
      const payload = { status: 200, message: "Users fetched successfully", data: { messages }, res };
      return sendResponse(payload);
    });

  } catch(err) {
    console.log(err)
    const payload = { status: 500, message: "Something wrong happened", data: null, res };
    return sendResponse(payload);
  }
}

module.exports = {
  getAllMessages
};
;
