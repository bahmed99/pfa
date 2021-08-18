const express = require('express')
const router = express.Router()
const Contact = require("../../models/contact/index")
const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "iDriveGears@gmail.com",
        pass: "aok2020."
    }
})




router.post("/", (req, res) => {
    const data = req.body
    const contact = new Contact({
        email: data.email,
        message: data.message,
        name: data.name,
        age: data.age


    })
    contact.save().then(resul => {
        let mailoptions = {
            from: "iDriveGears@gmail.com",
            to: resul.email,
            subject: "Message bien envoyé",
            html: `
                    <h2>Chèr(e) ${resul.name}</h2>
                    <h3>Votre message est bien envoyé vous recevrez une réponse dans les plus brefs délais.</h3>
                    `
        }
        transporter.sendMail(mailoptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);

            }
        });
        res.send(resul)
    }).catch(err => {
        res.send(err)
    })
})



module.exports = router