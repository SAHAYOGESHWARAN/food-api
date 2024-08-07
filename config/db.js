const mongoose = required ('mongoose');
const colors = required("colors")


//function mongodb dfatabase connection
const connectDb = async () => {
    try{
    await mongoose.connect(process.env.MONGO_URl)
    console.log('connect to Database $ {mongoose.connection.host}',colors.bgCyan)
    }catch (error){
        console.error("Db Error", error,colors.bgReg);    }
}