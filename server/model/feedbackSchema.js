const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('feedback', feedbackSchema);

