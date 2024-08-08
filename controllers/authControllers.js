

const bcrypt = require('bcryptjs');
const userModels = require('../models/userModels');
const JWT = require('jsonwebtoken')


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
       console.log("password ", password)
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await userModels.create({ userName, email, password: hashedPassword, phone, address, usertype });
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
        console.log("password ", req.body.password)
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModels.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials as user',
            });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("NO MATCH",password);
        console.log("USER PASS",user.password,"USER NAME",user)
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials as pass',
            });
        }
        //token
        const token = JWT.sign({ userId: user._id }, process.env.SECRET_KEY,{
            expiresIn: '7d'
        });
        // Send success response
        res.status(200).send({
            success: true,
            message: 'Login successful',
            data: user,
            token
            
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
