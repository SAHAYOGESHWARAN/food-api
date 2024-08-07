const mongoose = require('mongoose')

//schema 
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:Array,
    },
    phone:{
        type:Number,
        required:[true,'phone umber is required']
    },
    usertype:{
        type:String,
        required:[true,'user type is required'],
        default:'client',
        enum:['clint','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:
    }
})