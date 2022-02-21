const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    creditCard: {
        type: Object,
        required: true
    },
    movements: {
        type: Object,
        // required: true
    },
    accountCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);