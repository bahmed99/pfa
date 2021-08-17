const express = require('express')
const router = express.Router()

const Client = require("../../models/user/client") 
const Employee = require("../../models/user/employe")
const Car = require("../../models/car/car")


router.get('/',(req,res)=>{
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



module.exports = router