const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Avis = require("../../models/avis/avis")
const requireLoginClient = require('../../middleWare/requireLoginClient')
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads/profile/clients');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);

    }
});

const upload = multer({
    storage: storage,
})



router.post('/avis', requireLoginClient, (req, res) => {
    const { vote, message } = req.body
    if (vote === 0 || !message) {
        return res.status(422).json({ error: "remplir tous les champs" })
    }
    const avis = new Avis({
        postedBy: req.client._id,
        vote: vote,
        message: message
    })
    avis.save()
    res.json({ message: "Message envoyé" })
})



router.get("/emplois", requireLoginClient, (req, res) => {
    res.status(200).send(JSON.stringify(req.client.timetable))
})

router.get("/client", requireLoginClient, (req, res) => {
    res.status(200).send(JSON.stringify(req.client))
})

router.put("/client", requireLoginClient, (req, res) => {
    const data = req.body
    Client.findById(req.client._id).then(result => {
        result.name = data.name
        result.cin = data.cin
        result.email = data.email
        result.tel=data.tel
        result.save().then(resultat => {

            res.send(resultat)
        })
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.put("/updateClientPicture", requireLoginClient, upload.single("pic"), (req, res) => {
    const pic = req.client.pic
    Client.findById(req.client._id).then(result => {
        result.pic = req.file.originalname
        result.save().then(resultat => {
            fs.unlink(`../client/public/uploads/profile/clients/${pic}`, function (err) {
                if (err) return console.log(err);
                console.log('file deleted successfully');
            });
            res.send(resultat)
        })
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.put("/removeNotification",requireLoginClient, (req, res) => {
    
    const data = req.body
    console.log(data)
    Client.findByIdAndUpdate(req.client._id, {
        $pull: { notifications: data }
    }, {
        new: true
    }).then(result=>{

        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})





module.exports = router