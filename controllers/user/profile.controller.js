

const getUserProfile = async (req, res) => {
  // try {
  //   const user = req.user;
  //   res.status(200).json({
  //     status: "success",
  //     data: user,
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     status: "error",
  //     error: error.message,
  //   });
  // }

  res.status(200).json({
    status: "success",
    data: req.user,
  });
}

module.exports = {
  getUserProfile
};
