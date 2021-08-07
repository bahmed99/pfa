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
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    resetToken: String,
    expireToken: Date,

}, { timestamps: true })


Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin

