const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const carSchema = new mongoose.Schema({
    status:{ 
        type: String, 
        enum:['0','1'], default :'0' }, 
    pic:{
        type: String,
        default: "https://www.linkpicture.com/q/kia.jpg"
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
        
    },
    age:{
        type:Number,
        required:true
    },
    technicVisitDate:{
        type:Date,
        
    },
    vignetteYear:{
        type:Number,
        default: parseInt(new Date().getFullYear())
    },
    assurance:{
        type: Boolean,
        default: true
        
    },
    vignette:{
        type: Boolean,
        default: true
        
    },
    technicVisit:{
        type: Boolean,
        default: true
        
    },
    dernierVidange:{type:Number, default: 0},
    entretien :{
        type: Boolean,
        default:true,
    }

},{timestamps : true})

Car=mongoose.model("Car", carSchema)

module.exports =Car