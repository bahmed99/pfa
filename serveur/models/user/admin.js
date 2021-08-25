const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        default: "user1.png"
    } ,
    resetToken: String,
    expireToken: Date,

}, { timestamps: true })


Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin

