const express = require('express')
const router = express.Router()

const Employee = require("../../models/user/employe")



router.get('/',(req,res)=>{
   Employee.find().select("pic name").then(resu=>{
       res.send(resu)
   }).catch(err=>{
       res.send(err)
   })
})



module.exports = router 