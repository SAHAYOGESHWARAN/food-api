// GET USER INFO
const getUserController = async  (req,res) => {
  try {
    //find user 
    const user = await User.findById(req.user.id);
} catch(error){
    console.log(error)
    res.status(500).send({
        success:false,
        message: 'Error fetching user info',
        error
    })
}
}
module.exports = {getUserController};
