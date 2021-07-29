const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const avisSchema = new mongoose.Schema({
    postedBy:{ //taamell il liaison bin il posts wil user
        type: ObjectId ,
        ref: "Client"
    } ,
    vote:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{timestamps : true})

avis=mongoose.model("Avis", avisSchema)

module.exports =avis