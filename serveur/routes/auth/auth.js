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
                        const token = jwt.sign({_id:newSavedUser._id} , JWT_SECRET)
                        const {_id,name,email,cin,pic,timetable,employee} = newSavedUser
                        res.json({token,client:{_id,name,email,cin,pic,timetable,employee}})
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
                    const token = jwt.sign({_id:savedUser._id} , JWT_SECRET)
                    const {_id,name,email,cin,pic,timetable,employee} = savedUser
                    res.json({token,client:{_id,name,email,cin,pic,timetable,employee}})
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

module.exports = router