const express = require("express");

const app = express()

const morgan = require('morgan')

const cors = require('cors')

const mongoose = require("mongoose")
const admin = require("./routes/admin/admin")
const client = require("./routes/client/client")
const navbar = require("./routes/navbar/index")
const auth = require("./routes/auth/auth")
const courses = require("./routes/course/course.js")
const employee = require("./routes/employee/employee")
const car = require("./routes/car/car")
const port = process.env.PORT || 3001;

const mongoURI = "mongodb+srv://pfa:pfa@cluster0.bntsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) =>
    console.log("connected to database"),
    app.listen(port, () => {
        console.log(`runinig on port ${port}`)
    }
    )

).catch(err => {
    console.log("error")
})


app.use(express.json())
//app.use(express.urlencoded({limit: '50mb'}));

app.use(cors())

app.use(morgan('tiny'))

app.use("/client", client)
app.use("/navbar", navbar)

app.use("/admin", admin)

app.use("/employe", employee)
app.use("/car",car)
app.use("/auth", auth)


app.use("/courses", courses)




