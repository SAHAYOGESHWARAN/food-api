// models/userModels.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
