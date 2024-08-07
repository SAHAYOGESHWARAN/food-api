const userModels = require("../models/userModels");

// Register controller
const registerController = async (req, res) => {
    try {
        const { username, email, password, phone, address } = req.body;

        // Validation
        if (!username || !email || !password || !address || !phone) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields",
            });
        }

        // Check if user already exists
        const existingUser = await userModels.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'Email already registered, please login',
            });
        }

        // Create new user
        const user = await userModels.create({ username, email, password, phone, address });
        res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: user, // You might want to send back the created user data
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error,
        });
    }
};

module.exports = { registerController };
