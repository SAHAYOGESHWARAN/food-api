const userModels = require('../models/userModels');

const getUserController = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // Log the request body to debug
        // Find user
        const user = await userModels.findById(req.body.id);
        // Validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not Found",
            });
        }
        // Hide password
        user.password = undefined;
        // Response
        res.status(200).send({
            success: true,
            message: "User fetched Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get User API",
            error,
        });
    }
};

module.exports = { getUserController };
