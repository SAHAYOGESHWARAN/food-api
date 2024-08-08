const userModels = require('../models/userModels');

const getUserController = async (req, res) => {
    try {
        // Log the request body to see what is being received
        console.log("Request Body:", req.body);

        // Attempt to find the user by ID
        const user = await userModel.findById({ _id: req.body.id });
        
        // Check if the user was found
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not Found",
            });
        }
        
        // Hide the password field
        user.password = undefined;
        
        // Send success response with user data
        res.status(200).send({
            success: true,
            message: "User fetched successfully",
            user,
        });
    } catch (error) {
        // Log any errors that occur during the request
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get User API",
            error: error.message,
        });
    }
};

// UPDATE USER
const updateUserController = async (req, res) => {
try{
    //find user
    const user = await userModel.findById({ _id: req.body.id });
}catch (error)
{
    console.log(error);
    res.status(500).send({
        success: false,
        message:'Error in update user API',
        error:error.message
    
    })
}
};

module.exports = { getUserController ,updateUserController};
