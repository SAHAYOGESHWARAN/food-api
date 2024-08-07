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
            data: user, // You might want to send back the created user data
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error: error.message, // Send the error message
        });
    }
};

//LOGIN
const loginController = async (req, res) => {
  try{
    const {email,password} = req.body
    //validfatuion
    if(!email || !password){
        return res.status(400).send({
            success:false,
            message:"Please fill all the fields"
            })
            }
        }
  }catch (error){
    console.log(error)
    res.status(500).send({
        success:false,
       message:'Error In login Api',
       error
    })
  }
};
module.exports = { registerController };
