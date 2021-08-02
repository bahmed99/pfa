const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Avis = require("../../models/avis/avis") 
const requireLoginClient = require('../../middleWare/requireLoginClient')

router.post('/avis',requireLoginClient ,(req,res)=>{
    const {vote,message} = req.body
    if (vote === 0 || !message )
    {
        return res.status(422).json({error : "remplir tous les champs"})
    }
    const avis = new Avis({
        postedBy : req.client._id ,
        vote : vote ,
        message: message 
    })
    avis.save()
    res.json({message : "Message envoyé"})    
})



router.get("/emplois/:id",requireLoginClient,(req,res)=>{
    Client.findById(req.params.id).then(result=>{
        res.status(200).send(JSON.stringify(result.timetable))
    }).catch(err=>{
        res.status(400).send(err)
    })
})



module.exports = router