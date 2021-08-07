const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const Client = require("../../models/user/client")
const Admin = require("../../models/user/admin")

const requireLoginAdmin = require("../../middleware/requireLoginAdmin")



router.get("/emplois",requireLoginAdmin, (req, res) => {
    var usersProjection = {
        email: false,
        password: false,
        cin: false,
        client: false
    };
  
    Employee.find({}, usersProjection).then(response => {
        const events = []
        const resources = []
        for (let i = 0; i < response.length; i++) {
            resources.push({
                id: i,
                title: response[i].name,
                url: response[i].pic
            })
            for (let j = 0; j < response[i].timetable.length; j++) {
                events.push({
                    resourceId: i,
                    title: response[i].timetable[j].title,
                    start: response[i].timetable[j].start,
                    end: response[i].timetable[j].end,
                    eventContent: response[i].timetable[j].nomClient,
                    color:response[i].timetable[j].color
                })
            }
        }
        res.status(200).send({events:events,resources:resources})
    })
        .catch((err) => {
            res.status(400).send(err)

        })
})


router.get("/Admin/ressources",requireLoginAdmin,(req,res)=>{
    const data = []
    Admin.find()
    .then(result=>{
        for (let i=0 ; i < result.length ; i++)
        {

            data.push({id:result[i]._id ,name:result[i].name , email:result[i].email , cin:result[i].cin , imgUrl :result[i].pic , tel:result[i].tel , role:"Admin" ,age:result[i].age})
        }
        Employee.find()
        .then(result1=>{
            for (let i=0 ; i < result1.length ; i++)
            {
                data.push({id:result1[i]._id ,name:result1[i].name , email:result1[i].email , cin:result1[i].cin , imgUrl :result1[i].pic , tel:result1[i].tel , role:"Employée" ,age:result1[i].age})
            }
            Client.find()
            .then(result2=>{
                for (let i=0 ; i < result2.length ; i++)
                {
                    data.push({id:result2[i]._id ,name:result2[i].name , email:result2[i].email , cin:result2[i].cin , imgUrl :result2[i].pic , tel:result2[i].tel , role:"Client" ,age:result2[i].age})
                }
                res.json(data)
            })
        })

        
    })
    
})

// router.get("/employee-client/:id",requireLoginEmployee,(req,res)=>{
//     Client.findOne({_id:req.params.id})
//     .then(result=>{
//         res.json(result)
//     }).catch(err=>{
//         console.log(err)
//     })  
// })

router.get ("/admin-utilisateur/:id", requireLoginAdmin, (req,res)=>{
    Client.findOne({_id:req.params.id})
    .exec((err,client)=>{
        if (err || !client)
        {
            Employee.findOne({_id:req.params.id})
            .exec((err,employee)=>{
                if(err || !employee)
                {
                    Admin.findOne({_id:req.params.id})
                    .exec((err,admin)=>{
                        res.json({user:admin, role : "Admin"})
                    })
                }
                else
                {
                    res.json({user:employee, role : "Employée"})
                }
            })
        }
        else
        {
            res.json({user:client, role : "Client"})
        }
    })
})


module.exports = router