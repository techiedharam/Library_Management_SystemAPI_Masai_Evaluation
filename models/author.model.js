const mongoose = require("mongoose")
// Author Schema:
// name (String, required)
// biography (String)
// dateOfBirth (Date)
// nationality (String)
// books (Array of Book references)

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    biography: {
        type: String,
    },
    dateOfBirth: {
        type: Date
    },
    nationality: {
        type: String,
    },
    books: {
        type: mongoose.Schema.ObjectId,
        ref: [""]
    }
})

const authorModel = mongoose.model("author", authorSchema)
module.exports = authorModel