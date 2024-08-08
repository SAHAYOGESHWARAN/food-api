// GET USER INFO
const userModels = require('../models/userModels');
const getUserController = async  (req,res) => {
    try {
        // Use req.params.id
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).send({
                success: false,
                message: "User ID is required"
            });
        }

        // Find user by ID
        const user = await userModels.findById(userId);

        // Validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
      // Handle password
      user.password = undefined;

      // Response
      res.status(200).send({
          success: true,
          message: "User info",
          data: user
      });
  } catch (error) {
      console.log(error);
      res.status(500).send({
          success: false,
          message: 'Error fetching user info',
          error
      });
  }
};

module.exports = { getUserController };