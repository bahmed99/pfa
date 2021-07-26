const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const courseSchema = new mongoose.Schema({
    pic:{
        type: String,
        required:true
    },
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    wrongAnswer1: {
        type: String,
        required: true
    },
    wrongAnswer2:{
        type: String,
        required: true
    } 
})

mongoose.model("Course", courseSchema)