const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

dotenv.config();

connectDb();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());  // This middleware is essential to parse JSON bodies
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Node Server is running on port ${port}`);
});
