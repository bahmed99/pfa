const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
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
    timetable: [{
        date: { type: Date },
        duration: { type: Number, default: 1 },
        valid: { type: Boolean, default: false },
    }],
    employee: {
        type: ObjectId,
        ref: "Employee"
    },
    resetToken: String,
    expireToken: Date,
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    }
},{timestamps : true})

Client =mongoose.model("Client", clientSchema)
module.exports =Client