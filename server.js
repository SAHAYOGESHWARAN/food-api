const express = require('express');
const colors = require('colors');
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// dotenv configuration
dotenv.config();
// Connect to database
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// route
app.use('/api/v1/test', require('./routes/testRoutes')); // Corrected the route path

// Define a route to get all users (or display a welcome message)
app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome To Food Server</h1>");
});

// Define the port
const port = process.env.PORT || 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Node Server is running on port ${port}`);
});
