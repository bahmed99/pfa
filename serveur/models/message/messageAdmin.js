const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const messageSchema = new mongoose.Schema({
    messages:[{
        author : String ,
        type : {type:String} ,
        data :{type:Object} ,
        sender : String 
    }] ,
    employee: {
        type: ObjectId,
        ref: "Employee"
    }

})

Message = mongoose.model("MessageAdmin" , messageSchema)
module.exports = Message