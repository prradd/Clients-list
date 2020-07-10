const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    mail: {
        type: String,
        required: false
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', UserSchema);