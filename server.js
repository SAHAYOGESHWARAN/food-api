const express = require('express');

// Initialize express app
const app = express();

// Define a route to get all users (or display a welcome message)
app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome To Food Server</h1>");
});

// Define the port
const port = 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
