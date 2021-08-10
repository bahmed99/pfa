const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Client = require("../../models/user/client")
const Employee = require("../../models/user/employe")
const Admin = require("../../models/user/admin")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { JWT_SECRET } = require('../../Keys')
const requireLoginEmployee = require('../../middleWare/requireLoginEmployee')
const requireLoginAdmin = require('../../middleWare/requireLoginAdmin')

const {ObjectId} = require('mongodb');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads/profile/clients');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage,
})

const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads/profile/employes');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);

    }
});

const upload1 = multer({
    storage: storage1,
})

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads/profile/admin');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);

    }
});

const upload2= multer({
    storage: storage2,
})


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "iDriveGears@gmail.com",
        pass: "aok2020."
    }
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) //khaliha fel front khir
    {
        return res.status(422).json({ error: "Essayer de remplir tous les champs" })
    }
    Client.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                Employee.findOne({ email: email })
                    .then(newSavedUser => {
                        if (!newSavedUser) {
                            return res.status(422).json({ error: "vérifier votre email ou votre mot de passe" })
                        }
                        bcrypt.compare(password, newSavedUser.password)
                            .then(domatch => {
                                if (domatch) {
                                    const detect = 2
                                    const token = jwt.sign({ _id: newSavedUser._id }, JWT_SECRET)
                                    const { _id, name, email, cin, pic, timetable, client } = newSavedUser
                                    res.json({ detect, token, user: { _id, name, email, cin, pic, timetable, client } })
                                }
                                else {
                                    return res.status(422).json({ error: "vérifier votre email ou votre mot de passe" })
                                }

                            }).catch(err => {
                                console.log(err)
                            })
                    }).catch(err => {
                        console.log(err)
                    })
            }
            else {
                bcrypt.compare(password, savedUser.password)
                    .then(domatch => {
                        if (domatch) {
                            const detect = 1
                            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                            const { _id, name, email, cin, pic, timetable, employee } = savedUser
                            res.json({ detect, token, user: { _id, name, email, cin, pic, timetable, employee } })
                        }
                        else {
                            return res.status(422).json({ error: "vérifier votre email ou votre mot de passe" })
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            }
        }).catch(err => {
            console.log(err)
        })
})


router.post('/client/signup', requireLoginEmployee, upload.single('image'), (req, res) => {
    const { name, email, cin, tel, age } = req.body
    if (!name || !email || !cin || !tel || !age) {
        return res.status(422).json({ error: "Essayer de remplir tous les champs" })
    }
    Client.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) {
                return res.status(422).json({ error: "Il existe un autre utilisateur avec cet email" })
            }
            crypto.randomBytes(32, (err, buffer) => {
                if (err) {
                    console.log(err)
                }
                const password = buffer.toString("hex")
                bcrypt.hash(password, 15)
                    .then(hashedpassword => {
                        const client = new Client({
                            name: name,
                            email: email,
                            password: hashedpassword,
                            cin: cin,
                            tel: tel,
                            age: age,
                            pic: req.file.originalname,
                            employee: req.employee._id
                        })
                        client.save()
                            .then(user => {
                                let mailoptions = {
                                    from: "iDriveGears@gmail.com",
                                    to: user.email,
                                    subject: "signup success",
                                    html: `
                        <h2>Bienvenue Monsieur ${name}</h2>
                        <h5> Votre mot de passe est : ${password} </h5>
                        `
                                }
                                transporter.sendMail(mailoptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('Email sent: ' + info.response);

                                    }
                                });
                                Employee.findByIdAndUpdate(req.employee._id, {
                                    $push: { client: user._id }
                                }, {
                                    new: true
                                }).then(result => {
                                    res.json({ message: "le compte est bien créé" })
                                }).catch(err => {
                                    console.log(err)
                                })

                            })

                    }).catch(err => {
                        console.log(err)
                    })
            })

        }).catch(err => {
            console.log(err)
        })
})


router.post('/employee/signup', requireLoginAdmin, upload1.single('image'), (req, res) => {
    const { name, email, cin, age, tel , car } = req.body
    if (!name || !email || !cin || !age || !tel || !car) {
        return res.status(422).json({ error: "Essayer de remplir tous les champs" })

    }
    Employee.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) {
                return res.status(422).json({ error: "Il existe un autre utilisateur avec ce email" })
            }

            crypto.randomBytes(32, (err, buffer) => {
                if (err) {
                    console.log(err)
                }
                const password = buffer.toString("hex")
                bcrypt.hash(password, 15)
                    .then(hashedpassword => {
                        const employee = new Employee({
                            name: name,
                            email: email,
                            age: age,
                            tel: tel,
                            pic: req.file.originalname,
                            password: hashedpassword,
                            cin: cin ,
                            car : car
                        })
                        employee.save()
                            .then(user => {
                                let mailoptions = {
                                    from: "iDriveGears@gmail.com",
                                    to: user.email,
                                    subject: "signup success",
                                    html: `
                        <h2>Bienvenue Chèr(e) ${name}</h2>
                        <h5> Votre mot de passe est : ${password} </h5>
                        `
                                }
                                transporter.sendMail(mailoptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('Email sent: ' + info.response);

                                    }
                                });
                                res.json({ message: "le compte est bien créé" })
                            })

                    }).catch(err => {
                        console.log(err)
                    })
            })
        }).catch(err => {
            console.log(err)
        })
})

router.post('/mdpOublier', (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        Client.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    Employee.findOne({ email: req.body.email })
                        .then(employeeUser => {
                            if (!employeeUser) {
                                return res.status(422).json({ error: "Aucun utilisateur avec ce mail" })
                            }
                            else {
                                employeeUser.resetToken = token
                                employeeUser.expireToken = Date.now() + 3600000
                                employeeUser.save().then(result => {
                                    let mailoptions = {
                                        from: "iDriveGears@gmail.com",
                                        to: employeeUser.email,
                                        subject: "signup success",
                                        html: `
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
                                    res.json({ message: "visiter votre mail" })

                                })
                            }
                        })
                }
                else {
                    user.resetToken = token
                    user.expireToken = Date.now() + 3600000
                    user.save().then(result => {
                        let mailoptions = {
                            from: "iDriveGears@gmail.com",
                            to: user.email,
                            subject: "signup success",
                            html: `
                        <p>you requested for password reset</p>
                        <h5> click on this <a href="http://localhost:3000/reset/${token}"> Link </a> to reset your password</h5>
                        `
                        }
                        transporter.sendMail(mailoptions, function (error, info) {
                            if (error) {
                                console.log(error);
                            }
                            else {
                                console.log('Email sent: ' + info.response);

                            }
                        });
                        res.json({ message: "check your mail" })

                    })
                }
            })
    })
})

router.post('/newPassword', (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    Client.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
        .then(user => {
            if (!user) {
                Employee.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
                    .then(employeeUser => {
                        if (!employeeUser) {
                            return res.status(422).json({ error: "Réessayer session expirée" })
                        }
                        else {
                            bcrypt.hash(newPassword, 15).then(hashedpassword => {
                                employeeUser.password = hashedpassword
                                employeeUser.resetToken = undefined
                                employeeUser.expireToken = undefined
                                employeeUser.save().then(saveduser => {
                                    res.json({ message: "La mise a jour de votre mot de passe est bien faite" })
                                })
                            }).catch(err => {
                                console.log(err)
                            })
                        }

                    })
            }
            else {
                bcrypt.hash(newPassword, 15).then(hashedpassword => {
                    user.password = hashedpassword
                    user.resetToken = undefined
                    user.expireToken = undefined
                    user.save().then(saveduser => {
                        res.json({ message: "La mise a jour de votre mot de passe est bien faite" })
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })
})

router.post("/admin/login", (req, res) => {

    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Essayer de remplir tous les champs" })
    }
    Admin.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {

                return res.status(422).json({ error: "vérifier votre email ou votre mot de passe" })
            }
            else {
                bcrypt.compare(password, savedUser.password)
                    .then(domatch => {
                        if (domatch) {

                            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                            const { _id, name, email, pic } = savedUser
                            res.json({ token, user: { _id, name, email, pic } })
                        }
                        else {
                            return res.status(422).json({ error: "vérifier votre email ou votre mot de passe" })
                        }
                    }).catch(err => {
                        console.log(err)
                    })
          }
        }).catch(err => {
            console.log(err)
        })
})




router.post("/admin/signup", requireLoginAdmin, upload2.single('image'), (req, res) => {

    const { name, email, age, tel ,cin} = req.body
    if (!name || !email || !age || !tel||!cin) {
        console.log("1")
        return res.status(422).json({ error: "Essayer de remplir tous les champs" })
    }
    Admin.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) {

                return res.status(422).json({ error: "Il existe un autre utilisateur avec ce email" })
            }


            crypto.randomBytes(32, (err, buffer) => {
                if (err) {
                    console.log(err)
                }
                const password = buffer.toString("hex")
                bcrypt.hash(password, 15)
                    .then(hashedpassword => {
                        const admin = new Admin({
                            name: name,
                            email: email,
                            age: age,
                            tel: tel,
                            cin:cin,
                            password: hashedpassword,
                            pic: req.file.originalname

                        })
                        admin.save()
                            .then(user => {
                                let mailoptions = {
                                    from: "iDriveGears@gmail.com",
                                    to: user.email,
                                    subject: "signup success",
                                    html: `
                        <h2>Bienvenue Monsieur ${name}</h2>
                        <h5> Votre mot de passe est : ${password} </h5>  `
                                }
                                transporter.sendMail(mailoptions, function (error, info) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log('Email sent: ' + info.response);

                                    }
                                });
                                res.json({ message: "le compte est bien créé" })
                            })

                    }).catch(err => {
                        console.log(err)
                    }) })

            }).catch(err => {
                console.log(err)
            })
        })


router.post('/admin/newPassword', (req, res) => {
        const newPassword = req.body.password
        const sentToken = req.body.token
        Admin.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
            .then(user => {
                if (!user) {

                    return res.status(422).json({ error: "Réessayer session expirée" })
                }
                else {
                    bcrypt.hash(newPassword, 15).then(hashedpassword => {
                        user.password = hashedpassword
                        user.resetToken = undefined
                        user.expireToken = undefined
                        user.save().then(saveduser => {
                            res.json({ message: "La mise a jour de votre mot de passe est bien faite" })
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }).catch(err => {
                console.log(err)
            })
    })


router.post('/admin/mdpOublier', (req, res) => {
        crypto.randomBytes(32, (err, buffer) => {
            if (err) {
                console.log(err)
            }
            const token = buffer.toString("hex")
            Admin.findOne({ email: req.body.email })
                .then(user => {
                    if (!user) {

                        return res.status(422).json({ error: "Aucun utilisateur avec ce mail" })
                    }

                    else {
                        user.resetToken = token
                        user.expireToken = Date.now() + 3600000
                        user.save().then(result => {
                            let mailoptions = {
                                from: "iDriveGears@gmail.com",
                                to: user.email,
                                subject: "signup success",
                                html: `
                        <p>you requested for password reset</p>
                        <h5> click on this <a href="http://localhost:3000/admin/reset-password/${token}"> Link </a> to reset your password</h5>
                        `
                            }
                            transporter.sendMail(mailoptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    console.log('Email sent: ' + info.response);

                                }
                            });
                            res.json({ message: "check your mail" })

                        })
                    }
                })
        })
    })



    module.exports = router