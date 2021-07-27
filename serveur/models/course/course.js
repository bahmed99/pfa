const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    course: {
        type:Array,
        required:true
    }
}, { timestamps: true })

Course = mongoose.model("Course", courseSchema)
module.exports = Course