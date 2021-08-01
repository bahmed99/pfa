const express = require('express')
const router = express.Router()
const Employee = require("../../models/user/employe")
const requireLoginAdmin = require("../../middleware/requireLoginAdmin")



router.get("/emplois", (req, res) => {
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
                    color:response[i].timetable[j].color
                })
            }
        }
        res.status(200).send({events:events,resources:resources})
    })
        .catch((err) => {
            res.status(400).send(err)

        })
})



module.exports = router