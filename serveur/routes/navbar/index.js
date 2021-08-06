const express = require('express')
const router = express.Router()
const requireLogin = require("../../middleware/requireLogin")


router.get("/",requireLogin,(req,res)=>{
res.send({user:req.user,role:req.role
})
})

module.exports = router