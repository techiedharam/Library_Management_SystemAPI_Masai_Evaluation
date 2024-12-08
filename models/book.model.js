const mongoose = require("mongoose")
// Book Schema:
// title(String, required)
// ISBN(String, unique, required)
// summary(String)
// publicationDate(Date)
// genres(Array of Strings)
// copiesAvailable(Number, default: 1)
// author(Author reference)
// borrowedBy(Array of User references)

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String
    },
    publicationDate: {
        type: Date,
    },
    genres: {
        type: [String],
    },
    copiesAvailable: {
        type: Number,
        default: 1
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ""
    },
    borrowedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: ""
    }
})

const bookModel = mongoose.model("book", bookSchema)
module.exports = bookModel