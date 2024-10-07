// config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully'); // Log success message
    } catch (error) {
        console.error('MongoDB connection error:', error); // Log error message
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB; // Export the connectDB function
