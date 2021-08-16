const express = require('express')
const router = express.Router()
const Message = require('../../models/message/message')

const requireLoginEmployee = require("../../middleware/requireLoginEmployee")
const requireLoginClient = require('../../middleWare/requireLoginClient')


router.get('/messageClient',requireLoginClient, (req,res)=>{
    Message.findOne({client: req.client._id})
    .then(result=>{
        for (let i=0 ; i<result.messages.length ; i++)
        {
            if(result.messages[i].sender !== (req.client._id).toString())
            {
                result.messages[i].author = "them"
            }
        }
        res.json(result)
    })
})

router.get('/messageEmployee/:id',requireLoginEmployee, (req,res)=>{
    Message.findOne({client: req.params.id})
    .then(result=>{
        for (let i=0 ; i<result.messages.length ; i++)
        {
            if(result.messages[i].sender !== (req.employee._id).toString())
            {
                result.messages[i].author = "them"
            }
        }
        res.json(result)
    })
})

router.put('/messageClient' ,requireLoginClient, (req,res)=>{
    const message = req.body.message
    console.log(message)
    Message.findOneAndUpdate({client:req.client._id},{
        $push:{messages:message}
        },{
            new:true
        }).then(r=>{
            res.json(r)
        })
})

router.put('/messageEmployee/:id' ,requireLoginEmployee, (req,res)=>{
    const message = req.body.message
    console.log(message)
    Message.findOneAndUpdate({client:req.params.id},{
        $push:{messages:message}
        },{
            new:true
        }).then(r=>{
            res.json(r)
        })
})
router.post('/',(req,res)=>{
    const {client , employee} = req.body
    const message = new Message({
        client : client ,
        employee : employee
    })
    message.save()
    .then(r=>{
        res.json("ok")
    })
})

module.exports = router 