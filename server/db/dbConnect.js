//dbConnect.js
const mongoose = require('mongoose');
require("dotenv").config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connection successful");
    } catch (error) {
        console.error("Database connection failed", error);
        throw error; 
    }
};

module.exports = connectDb; 
