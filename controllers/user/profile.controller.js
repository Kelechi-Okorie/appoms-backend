

const { User, Review, Project, Service } = require('../../models');

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
  try {
    const user = await User.findOne({ 
      where: { wmail: req.user.email },
      include: [
        { model: Review, as: 'reviews' },
        { model: Service, as: 'services' },
        { model: Project, as: 'projects' }
      ]
    });
  
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usernot found",
      });
    };

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
module.exports = {
  getUserProfile,
};
