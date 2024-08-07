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
      const exisiting = await userModels.findOne({email})
      if(exisiting){
        return res.status(500).send({
            success:false,
            message:'Email Already Register please login'
        })
    }
    //create new user
    const user = await userModels.create({username,email,password,phone,address})
    res.status(201).send({
        success:true,
        message:'User Created Successfully',

    })
}catch (error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in register api',
        error
    })
};

module.exports = {registerController}