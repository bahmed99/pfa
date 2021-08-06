const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../Keys')

const Admin = require("../models/user/admin") 
const Employee = require("../models/user/employe")


module.exports = (req,res,next) =>{
    const {authorization} = req.headers
    //authorization === Bearer sfsdfdsffdsf --> sfsdfdsffdsf hedha houwa il token illi l9ineh fil postman
    if (!authorization)
    {
        return res.status(401).json({error:"you must be logged in 1"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error:"you must be logged in"})
        }
        const {_id} = payload 
        Admin.findById(_id).then(userdata=>{
         if(userdata){
            req.user = userdata
            req.role="admin"
            next()
         }
         else {
            Employee.findById(_id).then(data=>{
                req.user = userdata
                req.role="employe"
            next()
            })
         }
         
        })
    }) 

}