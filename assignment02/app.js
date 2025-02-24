require('dotenv').config(); // Load the environment variables from the .env file

const mongoose = require('mongoose');
const express = require("express");
const courseRoute = require("./routes/course.route.js");
const studentRoute = require("./routes/student.route.js");
const regiserRoute = require("./routes/register.route.js");
const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoute);
app.use("/api/students", studentRoute);
app.use("/api/register", regiserRoute);

const dbURI = process.env.MONGO_URI; // Use the environment variable for the MongoDB URI

mongoose.connect(dbURI, { dbName: 'home05' })
  .then(() => {
      console.log("Connected to the database!");
      app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
      });
  })
  .catch(() => {
      console.log("Failed to connect to the database.");
  });
