const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    age:{
        type:String,
        required:true
    },
  
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps : true})

Contact=mongoose.model("Contact", contactSchema)

module.exports =Contact