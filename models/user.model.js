const mongoose = require("mongoose")

// User Schema:
// username(String, unique, required)
// password(String, required)
// role(String, enum: ['Admin', 'Member'], default: 'Member')
// name(String, required)
// email(String, required, unique)
// borrowedBooks(Array of Book references)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Member'],
        default: "Member"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    borrowedBooks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "borrowingTransactionModel"
    }
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel