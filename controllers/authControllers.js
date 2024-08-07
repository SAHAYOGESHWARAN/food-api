//REGISTER

const userModels = require("../models/userModels")

const registerController = async (req,res) => {}
try{
    const {username,email,password,phone,address} = req.body//
      //validation
      if(!username ||!email || !password || !address || !phone){
        return res.status(500).send({
            success:false,
            message:"Please fill all the fields"
        })
      }

      //check user
      const exisiting = await userModel.findOne({email})
      
}catch (error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in register api',
        error
    })
};

module.exports = {registerController}