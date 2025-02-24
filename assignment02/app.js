const mongoose = require('mongoose');
const express = require("express");
const courseRoute = require ("./routes/course.route.js")
const studentRoute = require ("./routes/student.route.js")
const regiserRoute = require ("./routes/register.route.js")
const app = express();
const port = 3000;

// const Course = require ('./models/course.model');
// const Student = require ('./models/student.model');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoute)
app.use("/api/students", studentRoute)
app.use("/api/register", regiserRoute)


mongoose.connect('mongodb+srv://Student05:Student05@home05.k7myv.mongodb.net/', {dbName: 'home05'})
.then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})
.catch(() => {
    console.log("Failed to connect to the database.");
});
