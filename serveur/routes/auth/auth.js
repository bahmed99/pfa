const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Client = require("../../models/user/client") 
const Employee = require("../../models/user/employe")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const {JWT_SECRET} = require('../../Keys')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"iDriveGears@gmail.com" ,
        pass:"aok2020."
    }
})

router.post('/login',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password)
    {
        return res.status(422).json({error:"Essayer de remplir tous les champs"})
    }
    Client.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser)
        {
            Employee.findOne({email:email})
            .then(newSavedUser=>{
                if (!newSavedUser)
                {
                    return res.status(422).json({error:"vérifier votre email ou votre mot de passe"})
                }
                bcrypt.compare(password,newSavedUser.password)
                .then(domatch=>{
                    if (domatch)
                    {
                        const detect = 2
                        const token = jwt.sign({_id:newSavedUser._id} , JWT_SECRET)
                        const {_id,name,email,cin,pic,timetable,employee} = newSavedUser
                        res.json({detect,token,user:{_id,name,email,cin,pic,timetable,employee}})
                    }
                    else
                    {
                        return res.status(422).json({error:"vérifier votre email ou votre mot de passe"})
                    }
                    
                }).catch(err=>{
                    console.log(err)
                })
            }).catch(err=>{
                console.log(err)
            })
        }
        else
        {
            bcrypt.compare(password,savedUser.password)
            .then(domatch=>{
                if(domatch)
                {
                    const detect = 1
                    const token = jwt.sign({_id:savedUser._id} , JWT_SECRET)
                    const {_id,name,email,cin,pic,timetable,employee} = savedUser
                    res.json({detect,token,user:{_id,name,email,cin,pic,timetable,employee}})
                }
                else
                {
                    return res.status(422).json({error:"vérifier votre email ou votre mot de passe"})
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/client/signup',(req,res)=>{
    const {name,email,cin} = req.body
    if(!name || !email || !cin)
    {
        return res.status(422).json({error:"Essayer de remplir tous les champs"})
    }
    Client.findOne({email:email})
    .then(savedUser=>{
        if(savedUser)
        {
            return res.status(422).json({error:"Il existe un autre utilisateur avec ce email"})
        }
        crypto.randomBytes(16,(err,buffer)=>{
            if(err)
            {
                console.log(err)
            }
            const password = buffer.toString("hex")
            bcrypt.hash(password,15)
            .then(hashedpassword=>{
                const client = new Client({
                    name : name ,
                    email : email ,
                    password :hashedpassword ,
                    cin :cin
                })
                client.save()
                .then(user=>{
                    let mailoptions ={
                        from : "iDriveGears@gmail.com" ,
                        to:user.email,
                        subject:"signup success" ,
                        html:`
                        <h2>Bienvenue Monsieur ${name}</h2>
                        <h5> Voytr mot de passe est : ${password} </h5>
                        `
                    }
                    transporter.sendMail(mailoptions, function (error, info) {
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
        
                        }
                    });
                    res.json({message:"le compte est bien créé"})
                })

            }).catch(err=>{
                console.log(err)
            })
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/mdpOublier',(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err)
        {
            console.log(err)
        }
        const token = buffer.toString("hex")
        Client.findOne({email:req.body.email})
        .then(user=>{
            if (!user)
            {
                Employee.findOne({email:req.body.email})
                .then(employeeUser=>{
                    if(!employeeUser)
                    {
                        return res.status(422).json({error:"Aucun utilisateur avec ce mail"})
                    }
                    else{
                        employeeUser.resetToken =token
                        employeeUser.expireToken = Date.now()+ 3600000
                        employeeUser.save().then(result=>{
                            let mailoptions ={
                                from : "sema.kor88@gmail.com" ,
                                to:user.email,
                                subject:"signup success" ,
                                html:`
                                <p>you requested for password reset</p>
                                <h5> click on this <a href="http://localhost:3000/reset/${token}"> Link </a> to reset your password</h5>
                                `
                            }
                            transporter.sendMail(mailoptions, function (error, info) {
                                if (error) {
                                console.log(error);
                                } else {
                                console.log('Email sent: ' + info.response);
                
                                }
                            });
                            res.json({message : "visiter votre mail"})

                        })
                    }
                })
            }
            else
            {
                user.resetToken =token
                user.expireToken = Date.now()+ 3600000
                user.save().then(result=>{
                    let mailoptions ={
                        from : "sema.kor88@gmail.com" ,
                        to:user.email,
                        subject:"signup success" ,
                        html:`
                        <p>you requested for password reset</p>
                        <h5> click on this <a href="http://localhost:3000/reset/${token}"> Link </a> to reset your password</h5>
                        `
                    }
                    transporter.sendMail(mailoptions, function (error, info) {
                        if (error) {
                        console.log(error);
                        } 
                        else 
                        {
                        console.log('Email sent: ' + info.response);
        
                        }
                    });
                    res.json({message : "check your mail"})

                })
            }
        })
    })
})

router.post('/newPassword',(req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    Client.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user)
        {
            Employee.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
            .then(employeeUser=>{
                if(!employeeUser)
                {
                    return res.status(422).json({error:"Réessayer session expirée"})
                }
                else
                {
                    bcrypt.hash(newPassword,15).then(hashedpassword=>{
                        employeeUser.password= hashedpassword
                        employeeUser.resetToken = undefined
                        employeeUser.expireToken = undefined
                        employeeUser.save().then(saveduser=>{
                            res.json({message:"La mise a jour de votre mot de passe est bien faite"})
                        })
                    }).catch(err=>{
                       console.log(err)
                    })
                }

            })
        }
        else
        {
            bcrypt.hash(newPassword,15).then(hashedpassword=>{
                user.password= hashedpassword
                user.resetToken = undefined
                user.expireToken = undefined
                user.save().then(saveduser=>{
                    res.json({message:"La mise a jour de votre mot de passe est bien faite"})
                })
            }).catch(err=>{
            console.log(err)
            })
        }
    }).catch(err=>{
        console.log(err)
    })
})





module.exports = router