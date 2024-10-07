require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes'); // Ensure the correct path to your routes
const connectDB = require('./config/db'); // Import the database connection

const app = express(); // Initialize the Express app

const PORT = process.env.PORT || 5001; // Use the PORT from .env or default to 5001

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB(); // Use the separate database config

// Routes
app.use('/api/transactions', transactionRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
