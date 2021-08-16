const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const Client = require("../../models/user/client")
const Admin = require("../../models/user/admin")
const fs = require('fs')
const MessageAdmin = require("../../models/message/messageAdmin")

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
                    MessageAdmin.findOne({employee:req.params.id})
                    .then(result1=>{
                        
                      
                        res.json({user:employee, role : "Employée",chat:result1._id})
        
                    })
                  
                }
            })
        }
        else
        {
            res.json({user:client, role : "Client"})
        }
    })
})

router.put('/updateAdmin',requireLoginAdmin,(req,res)=>{
    const { name , email , cin ,  tel , age} = req.body
    if (!name || !email || !cin ||  !tel || !age)
    {
        return res.status(422).json({error : "please add all fields"})
    }
    Admin.findOne({_id:req.admin._id})
    .then(result=>{
        result.name = name
        result.email = email
        result.cin =cin
        result.tel = tel
        result.age = age
        result.save()
        .then(result1=>{
             res.json({message:"saved successfully"})
        })  
        
    }).catch(err=>{
        console.log(err)
    })

})


router.delete('/deleteEmployee/:id',requireLoginAdmin,(req,res)=>{
    Employee.findOne({_id:req.params.id})
    .populate("client","_id cin")
    .populate("employee","_id pic")
    .then(employee=>{
            Client.find({employee:employee.id})
            .then(result1=>{
                for (let i=0 ; i< result1.length ; i++ )
                {
                    result1[i].employee = null 
                    result1[i].timetable = []
                    result1[i].save()

                }
                fs.unlink(`../client/public/uploads/profile/employes/${employee.pic}`, function (err) {
                    if (err) return console.log(err);
                    console.log('file deleted successfully');
                });
                res.json(employee.client)
                employee.remove()
                .then(r=>{ 
                })
                
            })
        }).catch(err=>{
            console.log(err)
        })

})

router.get('/AffectationEmployee',requireLoginAdmin,(req,res)=>{
    Employee.find()
    .then(result=>{
        res.json(result)
    })
})
router.get('/AffectationClient',requireLoginAdmin,(req,res)=>{
    Client.find({employee:null})
    .then(result=>{
        res.json(result)
    })
})

router.put('/choixclient-employee',requireLoginAdmin,(req,res)=>{
    const {data1,data2} = req.body
    if (data1 === "" || data2 ==="")
    {
        return res.status(422).json({error : "please add all fields"})
    }
    Client.findOne({cin:data1})
    .then(result=>{
        Employee.findOne({cin:data2})
        .then(result1=>{
            result.employee = result1._id
            result.save()
            .then(r=>{
                Employee.findByIdAndUpdate(result1._id, {
                    $push: { client: result._id }
                }, {
                    new: true
                }).then(r1=>{
                    res.json({message:"ok"})
                })
            })
        })
    })

})
router.put('/essai',(req,res)=>{
    Client.findOne({_id:"610b04f544b0dc31dc45ce4a"})
    .then(result=>{
        result.employee=null 
        result.save()
        .then(t=>{
            res.json({message:"ok"})
        })
    })
})

module.exports = router