const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const carSchema = new mongoose.Schema({
    status:{ 
        type: String, 
        enum:['0','1'], default :'0' }, 
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
        start: { type: Date},
        end: { type: Date },
        title: { type: String },
        color: { type: String },
        eventContent: { type: String }
        
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
        type: String,
        default:"deb"
        
    },
    vignette:{
        type: String,
        default:"deb"
        
    },
    technicVisit:{
        type: String,
        default:"deb"
        
    },
    entretien :{
        type: String,
        default:"deb",
    }

},{timestamps : true})

Car=mongoose.model("Car", carSchema)

module.exports =Car