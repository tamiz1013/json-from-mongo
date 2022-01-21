const mongoose = require('mongoose');

const gmailSchema = mongoose.Schema({
    gmail: {
        type: String,
    },
    password: {
        type: String,
    },
    recoveryMail: {
        type: String,
    },
    condition: {
        type: String,
    },
});
module.exports = gmailSchema;
