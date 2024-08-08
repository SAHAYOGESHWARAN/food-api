const JWT = require('jsonwebtoken')

module.exports =async (req,res,next) => {
    try{
        // get token
        const token = req.headers["authorization"].split("")[1]
       JWT.verify(token,process.env.SECRET_KEY,(err,decode) =>{
        if(err){
            return res.status(401).send({
                success:false,
                message:"Invalid token"
            })
            }else{
                req.body.id = decode.id;
                next();
            }
        })
       
    }catch (error){
    console.log(error)
   res.status(500).send({
    success:false,
    message:'Error in Auth API',
    error:error.message
   }) 
 }}