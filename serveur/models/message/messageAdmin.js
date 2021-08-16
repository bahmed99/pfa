const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const messageSchema = new mongoose.Schema({
    messages:[{
        author : String ,
        type : {type:String} ,
        data : {text :String} ,
        sender : String 
    }] ,
    employee: {
        type: ObjectId,
        ref: "Employee"
    },
    Admin:{
        type: ObjectId,
        ref: "Admin"
    }

})

Message = mongoose.model("MessageAdmin" , messageSchema)
module.exports = Message