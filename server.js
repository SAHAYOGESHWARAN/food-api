const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db'); // Ensure you have this file for MongoDB connection

dotenv.config();

// Connect to the database
connectDb();

// Initialize express
const app = express();
app.use(express.json());

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));

// Define the port
const port = process.env.PORT || 7000;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Node Server is running on port ${port}`);  
});
