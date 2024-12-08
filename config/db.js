const mongoose = require("mongoose")
require("dotenv").config()
const mongoURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        mongoose.connect(mongoURI)
        console.log("Database Connected Successfully !");

    } catch (error) {
        console.log("Error in connecting DB")
    }
}

module.exports = connectDB