const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'user name is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    phone: {
        type: String,
        required: [true, 'phone number is required'],
    },
    address: {
        type: String,
        required: [true, 'address is required'],
    },
    usertype: {
        type: String,
        enum: ['clint', 'admin', 'vendor', 'driver'],
        required: [true, 'user type is required'],
    },
    // Other fields if needed
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
