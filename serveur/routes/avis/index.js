const express = require('express')
const router = express.Router()
const Avis = require("../../models/avis/avis")
const Client = require("../../models/user/client")


router.get("/", (req, res) => {


    Avis.find().then(result => {
        const id = []
        const message = []
        const data = []
        for (let i = 0; i < result.length; i++) {
            // Client.findOne({ _id: result[i].postedBy }).then(user => {

            //     data[i] = { name: user.name, pic: user.pic, message: result[i].message }

            // })
            id[i] = result[i].postedBy
            message[i] = result[i].message
        }
        var dupArray
        Client.find({
            '_id': { $in: id }
        }, function (err, array) {
            if (err) {
                // handle error
            } else {
                var objects = {};
                array.forEach(o => objects[o._id] = o);
                dupArray = id.map(id => objects[id]);
              
                for (let i = 0; i < id.length; i++) {
                    data[i] = { name: dupArray[i].name, message: message[i], pic: dupArray[i].pic }
                }
                res.send(data)
            }
        });


      
      




    }).catch(err => {
        res.send(err)
    })
})

module.exports = router