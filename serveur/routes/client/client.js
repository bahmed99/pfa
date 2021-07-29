const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Avis = require("../../models/avis/avis") 
const requireLoginClient = require('../../middleWare/requireLoginClient')

router.post('/avis',requireLoginClient ,(req,res)=>{
    const {vote,message} = req.body
    if (vote === 0 || !message )
    {
        return res.status(422).json({error : "remolir tous les champs"})
    }
    const avis = new Avis({
        postedBy : req.client._id ,
        vote : vote ,
        message: message 
    })
    avis.save()
    res.json({message : "Message envoyé"})    
})
module.exports = router