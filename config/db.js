// config/db.js
const mongoose = require('mongoose');
const colors = require('colors');

// Function to connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to Database: ${mongoose.connection.host}`.bgCyan);
    } catch (error) {
        console.error(`DB Error: ${error.message}`.bgRed);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDb;
