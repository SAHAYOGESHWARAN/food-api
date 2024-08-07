// models/userModels.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'user name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    usertype: {
        type: String,
        enum: ['client', 'admin', 'vendor', 'driver'],
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
