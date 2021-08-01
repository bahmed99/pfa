const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const Client = require("../../models/user/client") 

const event = [
    {
        title: 'séance code', start: '2021-07-30T09:00:00', end: '2021-07-30T10:00:00', color: 'red',
        eventContent: 'This is a cool event'
    }]

// router.put("/",(req,res)=>{
//     Employee.findByIdAndUpdate("61035a8874a4a7235c78e7d6"
//         ,{
//          client:["6102215414c03e41c8d1aa90"]
//     }).then(resp=>{
//         res.send(resp)
//     })
// })


router.get("/emplois/:id",(req,res)=>{
    Employee.findById(req.params.id).then(result=>{
        res.status(200).send(result.timetable)
    }).catch(err=>{
        res.status(400).send(err)
    })
})

router.put("/emplois/:id",(req,res)=>{
    Employee.findByIdAndUpdate(req.params.id,{
        $push:{timetable:req.body}
    },{
        new:true
    }).then(result=>{
        Client.findByIdAndUpdate(req.body.client,{
            $push:{
            timetable:{
                start: req.body.start,
                end: req.body.end ,
                title: req.body.title ,
                color: req.body.color ,
                eventContent: req.body.eventContent 
            }}
        },{
            new:true
        }).then(resultat=>{
            console.log(resultat)
            res.status(200).send(resultat)
    
            
        }).catch(errs=>{
            res.status(400).send(errs)
        })

       
        
    }).catch(err=>{
        res.status(400).send(err)
    })
})

router.get("/clients/:id",(req,res)=>{
    Employee.findById(req.params.id).then(result=>{
        Client.find({
            
            '_id':{ $in: result.client}
        }).then(resultat=>{
            res.status(200).send(JSON.stringify(resultat))
            }).catch(erreur=>{
                res.status(400).send(erreur)
        })
    }).catch(err=>{
        res.status(400).send(err)
    })
})



module.exports = router