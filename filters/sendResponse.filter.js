const sendResponse = ({status, message, data, res}) => {
  res.status(status).json({
      status,
      message,
      data
  })
}

module.exports = {
  sendResponse
}
