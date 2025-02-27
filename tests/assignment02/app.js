const mongoose = require('mongoose');
const express = require("express");

const bergRoute = require ("./routes/berg.routes")
const app = express();
const port = 3000;



const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/api/berg", bergRoute)


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
