const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const employeeSchema = new mongoose.Schema({
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
    } ,
    age: {
        type: String,
        required: true
    } ,
    password: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    timetable: [{
        start: { type: Date },
        end: { type: Date },
        title: { type: String },
        color: { type: String },
        eventContent: { type: String },
        client: {
            type: ObjectId,
            ref: "Client"
        },
        nomClient:{
            type:String
        }
    }],
    client: [{
        type: ObjectId,
        ref: "Client"
    }],
    resetToken: String,
    expireToken: Date,
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
    car: {
        type: ObjectId,
        ref: "Car"
    }
}, { timestamps: true })


Employee = mongoose.model("Employee", employeeSchema)
module.exports = Employee

