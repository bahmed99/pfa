const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const carSchema = new mongoose.Schema({
    pic:{
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
    model:{
        type: String,
        required: true
    },
    serie:{
        type: String,
        required: true
    },
    service: {
        type: Boolean,
        required: true
    },
    mileage:{
        type:Number,
        required: true
    },
    timetable: [{
        date: { type: Date, required: true },
        duration: { type: Number, default: 1 }
    }],
    assuranceDate:{
        type:Date,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    technicVisitDate:{
        type:Date,
        required:true
    },
    assurance:{
        type: Boolean
        
    },
    vignette:{
        type: Boolean
        
    },
    technicVisit:{
        type: Boolean
        
    },
    entretien :{
        type: Boolean
    }

})

mongoose.model("Car", carSchema)