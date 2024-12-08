const mongoose = require("mongoose")
// BorrowingTransaction Schema:
// book (Book reference, required)
// member (User reference, required)
// borrowDate (Date, default: Date.now)
// dueDate (Date, required)
// returnDate (Date)
// status (String, enum: ['Borrowed', 'Returned'], default: 'Borrowed')

const borrowingTransactionSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "",
    },
    member: {
        type: mongoose.Schema.ObjectId,
        ref: "",
        required: true
    },
    borrowDate: {
        type: Date,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['Borrowed', 'Returned'],
        default: 'Borrowed'
    }

})

const borrowingTransactionModel = mongoose.model("borrowingTransaction", borrowingTransactionSchema)
module.exports = borrowingTransactionModel