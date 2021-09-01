const express = require('express')
const router = express.Router()
const Message = require('../../models/message/message')
const MessageAdmin = require('../../models/message/messageAdmin')

const requireLoginEmployee = require("../../middleware/requireLoginEmployee")
const requireLoginClient = require('../../middleWare/requireLoginClient')
const requireLoginAdmin = require('../../middleWare/requireLoginAdmin')


const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads/messages');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage,
})








router.get('/messageClient', requireLoginClient, (req, res) => {
    Message.findOne({ client: req.client._id })
        .then(result => {
            for (let i = 0; i < result.messages.length; i++) {
                if (result.messages[i].sender !== (req.client._id).toString()) {
                    result.messages[i].author = "them"
                }
            }
            res.json(result)
        })
})

router.get('/messageEmployee/:id', requireLoginEmployee, (req, res) => {
    Message.findOne({ client: req.params.id })
        .then(result => {
            for (let i = 0; i < result.messages.length; i++) {
                if (result.messages[i].sender !== (req.employee._id).toString()) {
                    result.messages[i].author = "them"
                }
            }
            res.json(result)
        })
})

router.put('/messageClient', requireLoginClient, upload.single('file'), (req, res) => {
    let message
    if (req.body.type == "file") { message = JSON.parse(req.body.message) }
    else {
        message = req.body.message
    }

    Message.findOneAndUpdate({ client: req.client._id }, {
        $push: { messages: message }
    }, {
        new: true
    }).then(r => {
        res.json(r)
    })
})

router.put('/messageEmployee/:id', requireLoginEmployee, upload.single('file'), (req, res) => {
    let message
    if (req.body.type == "file") { message = JSON.parse(req.body.message) }
    else {
        message = req.body.message
    }
    Message.findOneAndUpdate({ client: req.params.id }, {
        $push: { messages: message }
    }, {
        new: true
    }).then(r => {
        res.json(r)
    })
})

// router.post('/',(req,res)=>{

//     const message = new MessageAdmin({
//         employee : '611271c87773584e6cb46153'
//     })
//     message.save()
//     .then(r=>{
//         res.json("ok")
//     })
// })


router.get('/messageEmployee', requireLoginEmployee, (req, res) => {
    MessageAdmin.findOne({ employee: req.employee._id })
        .then(result => {
            for (let i = 0; i < result.messages.length; i++) {
                if (result.messages[i].sender !== (req.employee._id).toString()) {
                    result.messages[i].author = "them"
                }
            }
            res.json(result)
        })
})

router.put('/messageEmployee', requireLoginEmployee, upload.single('file'), (req, res) => {
    let message
    if (req.body.type == "file") { message = JSON.parse(req.body.message) }
    else {
        message = req.body.message
    }
    MessageAdmin.findOneAndUpdate({ employee: req.employee._id }, {
        $push: { messages: message }
    }, {
        new: true
    }).then(r => {
        res.json(r)
    })
})

router.get('/messageAdmin/:id', requireLoginAdmin, (req, res) => {
    MessageAdmin.findOne({ employee: req.params.id })
        .then(result => {
            for (let i = 0; i < result.messages.length; i++) {
                if (result.messages[i].sender !== (req.admin._id).toString()) {
                    result.messages[i].author = "them"
                }
            }
            res.json(result)
        })
})

router.put('/messageAdmin/:id', requireLoginAdmin, upload.single('file'), (req, res) => {
    let message
    if (req.body.type == "file") { message = JSON.parse(req.body.message) }
    else {
        message = req.body.message
    }

    MessageAdmin.findOneAndUpdate({ employee: req.params.id }, {
        $push: { messages: message }
    }, {
        new: true
    }).then(r => {

        res.send(r)
    })
})



module.exports = router