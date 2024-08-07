const userModels = require("../models/userModels");

// Register controller
const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address, usertype } = req.body;

        // Validation
        if (!userName || !email || !password || !address || !phone || !usertype) {
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
        const user = await userModels.create({ userName, email, password, phone, address, usertype });
        res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error: error.message,
        });
    }
};

// Login controller
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please provide email and password",
            });
        }

        // Check if user exists
        const user = await userModels.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials',
            });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials',
            });
        }

        // If everything is ok, return success message
        res.status(200).send({
            success: true,
            message: 'User logged in successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login API',
            error: error.message,
        });
    }
};

module.exports = { registerController, loginController };
