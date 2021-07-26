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

// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))
// app.use("/client", require("./routes/client/"))
 app.use("/course", require("./routes/course/course.js"))

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) =>
    console.log("connected to database"),
    app.listen(port, () => {
        console.log(`runinig on port ${port}`)
    }
    )
).catch(err => {
    console.log("error")
})


