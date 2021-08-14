const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const messageSchema = new mongoose.Schema({
    messages:[{
        author : String ,
        type : {type:String} ,
        data : {text : String} ,
        sender : String 
    }] ,
    employee: {
        type: ObjectId,
        ref: "Employee"
    },
    client:{
        type: ObjectId,
        ref: "Client"
    }

})

Message = mongoose.model("Message" , messageSchema)
module.exports = Message