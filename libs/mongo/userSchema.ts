export {};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = UserSchema;
