const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const Client = require("../../models/user/client")
const Admin = require("../../models/user/admin")
const Avis = require("../../models/avis/avis")
const Contact = require("../../models/contact/index")
const fs = require('fs')
const MessageAdmin = require("../../models/message/messageAdmin")
const Message = require("../../models/message/message")

const requireLoginAdmin = require("../../middleware/requireLoginAdmin")



router.get("/emplois", requireLoginAdmin, (req, res) => {
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
                    color: response[i].timetable[j].color
                })
            }
        }
        res.status(200).send({ events: events, resources: resources })
    })
        .catch((err) => {
            res.status(400).send(err)

        })
})


router.get("/Admin/ressources", requireLoginAdmin, (req, res) => {
    const data = []
    Admin.find()
        .then(result => {
            for (let i = 0; i < result.length; i++) {

                data.push({ id: result[i]._id, name: result[i].name, email: result[i].email, cin: result[i].cin, imgUrl: result[i].pic, tel: result[i].tel, role: "Admin", age: result[i].age })
            }
            Employee.find()
                .then(result1 => {
                    for (let i = 0; i < result1.length; i++) {
                        data.push({ id: result1[i]._id, name: result1[i].name, email: result1[i].email, cin: result1[i].cin, imgUrl: result1[i].pic, tel: result1[i].tel, role: "Employée", age: result1[i].age })
                    }
                    Client.find()
                        .then(result2 => {
                            for (let i = 0; i < result2.length; i++) {
                                data.push({ id: result2[i]._id, name: result2[i].name, email: result2[i].email, cin: result2[i].cin, imgUrl: result2[i].pic, tel: result2[i].tel, role: "Client", age: result2[i].age })
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

router.get("/admin-utilisateur/:id", requireLoginAdmin, (req, res) => {
    Client.findOne({ _id: req.params.id })
        .exec((err, client) => {
            if (err || !client) {
                Employee.findOne({ _id: req.params.id })
                    .exec((err, employee) => {
                        if (err || !employee) {
                            Admin.findOne({ _id: req.params.id })
                                .exec((err, admin) => {
                                    res.json({ user: admin, role: "Admin" })
                                })
                        }
                        else {
                            MessageAdmin.findOne({ employee: req.params.id })
                                .then(result1 => {


                                    res.json({ user: employee, role: "Employée", chat: result1._id })

                                })

                        }
                    })
            }
            else {
                res.json({ user: client, role: "Client" })
            }
        })
})

router.put('/updateAdmin', requireLoginAdmin, (req, res) => {
    const { name, email, cin, tel, age } = req.body
    if (!name || !email || !cin || !tel || !age) {
        return res.status(422).json({ error: "please add all fields" })
    }
    Admin.findOne({ _id: req.admin._id })
        .then(result => {
            result.name = name
            result.email = email
            result.cin = cin
            result.tel = tel
            result.age = age
            result.save()
                .then(result1 => {
                    res.json({ message: "saved successfully" })
                })

        }).catch(err => {
            console.log(err)
        })

})


router.delete('/deleteEmployee/:id', requireLoginAdmin, (req, res) => {
    Employee.findOne({ _id: req.params.id })
        .populate("client", "_id cin")
        .populate("employee", "_id pic")
        .then(employee => {
            Client.find({ employee: employee.id })
                .then(result1 => {
                    for (let i = 0; i < result1.length; i++) {
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
                        .then(r => {
                        })

                })
        }).catch(err => {
            console.log(err)
        })

})

router.get('/AffectationEmployee', requireLoginAdmin, (req, res) => {
    Employee.find()
        .then(result => {
            res.json(result)
        })
})
router.get('/AffectationClient', requireLoginAdmin, (req, res) => {
    Client.find({ employee: null })
        .then(result => {
            res.json(result)
        })
})

router.put('/choixclient-employee', requireLoginAdmin, (req, res) => {
    const { data1, data2 } = req.body
    if (data1 === "" || data2 === "") {
        return res.status(422).json({ error: "please add all fields" })
    }
    Client.findOne({ cin: data1 })
        .then(result => {
            Employee.findOne({ cin: data2 })
                .then(result1 => {
                    result.employee = result1._id
                    result.save()
                        .then(r => {
                            Employee.findByIdAndUpdate(result1._id, {
                                $push: { client: result._id }
                            }, {
                                new: true
                            }).then(r1 => {
                                Message.findOne({ client: result._id }).then(cl => {
                                    cl.employee = result1._id
                                    cl.save().then(sa => {
                                        res.send("OK")
                                    })
                                })

                            }).catch(err=>{
                                res.send(err)
                            })
                        }).catch(err1=>{
                            res.send(err1)
                        })
                }).catch(err2=>{
                    res.send(err2)
                })
        }).catch(err3=>{
            res.send(err3)
        })

})


router.put('/essai', (req, res) => {
    Client.findOne({ _id: "610b04f544b0dc31dc45ce4a" })
        .then(result => {
            result.employee = null
            result.save()
                .then(t => {
                    res.json({ message: "ok" })
                })
        })
})

router.get('/statistics',requireLoginAdmin,(req,res)=>{
    Client.countDocuments().then((countClient=>{
        Employee.countDocuments().then((countEmployee=>{
            Car.countDocuments().then((countCar=>{
                res.send({client:countClient,employee:countEmployee,car:countCar})

            })).catch(err1=>{
                res.send(err1)

            })
        })).catch(err2=>{
            res.send(err2)
        })
    })).catch(err3=>{  
        res.send(err3)
    })
})

function getweek()
{
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay()+1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6
    
    var firstday = new Date(curr.setDate(first));
    var lastday = new Date(curr.setDate(last));
    return [firstday , lastday]
}


 

router.get('/nbrSeances',requireLoginAdmin,(req,res)=>{
    Client.find()
    .then(result=>{
        const [fd,ff] =  getweek()
        const tab1=["L", "M", "M", "J", "V", "S", "D"]
        let tab = [0,0,0,0,0,0,0]
        for(let i=0 ; i< result.length ; i++)
        {
            for(let j=0 ; j< result[i].timetable.length ; j++)
            {
                if(result[i].timetable[j].start.getFullYear() === new Date().getFullYear() && result[i].timetable[j].start.getMonth() === new Date().getMonth() && result[i].timetable[j].start.getDate()>= fd.getDate() && result[i].timetable[j].start.getDate()<= ff.getDate())
                {
                    if(result[i].timetable[j].start.getDay()===0)
                    {
                        tab[6]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===1)
                    {
                        tab[0]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===2)
                    {
                        tab[1]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===3)
                    {
                        tab[2]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===4)
                    {
                        tab[3]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===5)
                    {
                        tab[4]+=1
                    }
                    else if(result[i].timetable[j].start.getDay()===6)
                    {
                        tab[5]+=1
                    }


                }
            }
        }
        res.json({labels:tab1,series:[tab]})
    })
})

router.get('/nbreSub' ,requireLoginAdmin, (req,res)=>{
    
    let tab1 = [
        "Jan",
        "Fev",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aout",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ]
    
    Client.find()
    .then(result=>{
        let tab = [0,0,0,0,0,0,0,0,0,0,0,0]
        for(let i=0 ; i< result.length ; i++)
        {
            for (let j =0 ; j<12 ; j++)
            {
                if(result[i].createdAt.getMonth() === j)
                {
                    tab[j]= tab[j] + 1 

                }
            }
        }
        res.json({labels:tab1,series:[tab]})
    })
    

})

router.get('/nbreAvis', (req,res)=>{
    
    let tab1 = [
        "Jan",
        "Fev",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aout",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ]
    
    Contact.find()
    .then(result=>{
        let tab = [0,0,0,0,0,0,0,0,0,0,0,0]
        for(let i=0 ; i< result.length ; i++)
        {
                for (let j =0 ; j<12 ; j++)
                {
                    if(result[i].createdAt.getMonth() === j)
                    {
                        tab[j]= tab[j] + 1 

                    }
                }
        }
        res.json({labels:tab1,series:[tab]})
    })
    

})

router.get('/repartitionAvis', (req,res)=>{
     let labels = ["🤬", "🙁", "😶","😁","😍"]
    Avis.find()
    .then(result=>{
        let datasets = [
            {
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["red", "tomato", "orange", "#00e7e7" ,"#369579"],
              borderWidth: 0,
              data: [0, 0, 0, 0,0],
            },
          ]
        for(let i=0 ; i< result.length ; i++)
        {
            if(result[i].vote === 1)
            {
                datasets[0].data[0] += 1
            }
            if(result[i].vote === 2)
            {
                datasets[0].data[1] += 1
            }
            if(result[i].vote === 3)
            {
                datasets[0].data[2] += 1
            }
            if(result[i].vote === 4)
            {
                datasets[0].data[3] += 1
            }
            if(result[i].vote === 5)
            {
                datasets[0].data[4] += 1
            }
        }
        res.json({labels,datasets})
    })
    

})

router.get('/differenceAvis', (req,res)=>{
    
    let labels = [
        "Jan",
        "Fev",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Aout",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ]
    
    Avis.find()
    .then(result=>{
        let datasets = [
            {
              label: "Avis positifs" ,
              data: [0,0,0,0,0,0,0,0,0,0,0,0],
              fill: false,
              borderColor: "#369579",
              backgroundColor: "#369579",
              pointBorderColor: "#369579",
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8,
              tension: 0.4,
            },
            {
              label:"Avis négatifs" ,
              data: [0,0,0,0,0,0,0,0,0,0,0,0],
              fill: false,
              borderColor: "red",
              backgroundColor: "red",
              pointBorderColor: "red",
              pointRadius: 4,
              pointHoverRadius: 4,
              pointBorderWidth: 8,
              tension: 0.4,
            },
          ]
        for(let i=0 ; i< result.length ; i++)
        {
            if(result[i].vote>= 3)
            {
                for (let j =0 ; j<12 ; j++)
                {
                    if(result[i].createdAt.getMonth() === j)
                    {
                        datasets[0].data[j]+=1 

                    }
                }
            }
            else
            {
                for (let j =0 ; j<12 ; j++)
                {
                    if(result[i].createdAt.getMonth() === j)
                    {
                        datasets[1].data[j]+=1

                    }
                }

            }
        }
        res.json({labels,datasets})
    })
    

})



module.exports = router