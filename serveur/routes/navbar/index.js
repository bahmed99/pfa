const express = require('express')
const router = express.Router()
const requireLogin = require("../../middleware/requireLogin")
const Admin = require("../../models/user/admin") 
const Employee = require("../../models/user/employe")

router.get("/:id", (req, res) => {
    Employee.findOne({_id:req.params.id})
    .exec((err,employee)=>{
        if(err || !employee)
        {
            Admin.findOne({_id:req.params.id})
            .exec((err,admin)=>{
                res.json({user:admin,role:"admin"})
            })
        }
        else
        {
            res.json({user:employee,role:"employes"})
        }
    })
    
})

module.exports = router