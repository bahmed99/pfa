const express = require("express");

const app = express()

const morgan = require('morgan')

const cors = require('cors')

const mongoose = require("mongoose")

const port = process.env.PORT || 3001;

const mongoURI = "mongodb+srv://pfa:pfa@cluster0.bntsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json())

app.use(cors())

app.use(morgan('tiny'))

app.use("/client", require("./routes/client/client"))
// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))

app.use("/auth", require("./routes/auth/auth"))


app.use("/courses", require("./routes/course/course.js"))

const event = [
    {
        title: 'séance code', start: '2021-07-30T09:00:00', end: '2021-07-30T10:00:00', color: 'red',
        eventContent: 'This is a cool event'
    }]
app.post("/test", (req, res) => {
    const data = req.body
    event.push(data)
    console.log(event)
   
})
app.get("/test", (req, res) => {
    res.send(event)
})
app.delete("/test/:id", (req, res) => {
    const id = req.params
    console.log(id)
    event.shift()
     res.send("ok")
})


console.log(event)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) =>
    console.log("connected to database"),
    app.listen(port, () => {
        console.log(`runinig on port ${port}`)
    }
    )

).catch(err => {
    console.log("error")
})


