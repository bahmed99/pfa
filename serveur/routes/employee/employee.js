const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const Client = require("../../models/user/client")
const requireLoginEmployee = require("../../middleware/requireLoginEmployee")
// const event = [
//     {
//         title: 'séance code', start: '2021-07-30T09:00:00', end: '2021-07-30T10:00:00', color: 'red',
//         eventContent: 'This is a cool event'
//     }]

// router.put("/",(req,res)=>{
//     Employee.findByIdAndUpdate("610345ba74a4a7235c78e7be"
//         ,{
//          client:["6100317900d35d1ed0abbf83","610062eb4e98bb3a6095a74b"]
//     }).then(resp=>{
//         res.send(resp)
//     })
// })


router.get("/emplois/:id", requireLoginEmployee, (req, res) => {
    Employee.findById(req.params.id).then(result => {
        res.status(200).send(result.timetable)
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.put("/emplois/:id", requireLoginEmployee, (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, {
        $push: { timetable: req.body }
    }, {
        new: true
    }).then(result => {
        Client.findByIdAndUpdate(req.body.client, {
            $push: {
                timetable: {
                    start: req.body.start,
                    end: req.body.end,
                    title: req.body.title,
                    color: req.body.color,
                    eventContent: req.body.eventContent
                }
            }
        }, {
            new: true
        }).then(resultat => {
            console.log(resultat)
            res.status(200).send(resultat)


        }).catch(errs => {
            res.status(400).send(errs)
        })



    }).catch(err => {
        res.status(400).send(err)
    })
})

router.get("/clients/:id", requireLoginEmployee, (req, res) => {
    Employee.findById(req.params.id).then(result => {
        Client.find({

            '_id': { $in: result.client }
        }).then(resultat => {
            res.status(200).send(JSON.stringify(resultat))
        }).catch(erreur => {
            res.status(400).send(erreur)
        })
    }).catch(err => {
        res.status(400).send(err)
    })
})

router.get("/employee-clients",requireLoginEmployee,(req,res)=>{
    const data = []
    Employee.findOne({_id:req.employee._id})
    .populate("client","_id name cin email pic")
    .then(result=>{
        for (let i=0 ; i < result.client.length ; i++)
        {
            data.push({id:result.client[i]._id ,name:result.client[i].name , email:result.client[i].email , cin:result.client[i].cin , imgUrl :result.client[i].pic})
        }
        res.json(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
router.get("/employee-client/:id",requireLoginEmployee,(req,res)=>{
    Client.findOne({_id:req.params.id})
    .then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })  
})




router.put("/emplois-delete/:id", requireLoginEmployee,(req, res) => {
    const data = req.body
    console.log(data)
    Employee.findByIdAndUpdate(req.employee._id, {
        $pull: { timetable: data }
    }, {
        new: true
    }).then(resultat => {
        Client.findByIdAndUpdate(req.params.id, {
            $pull: { timetable: data
             }
        }, {
            new: true
        }).then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })

    })

})




module.exports = router