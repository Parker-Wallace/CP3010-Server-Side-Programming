const express = require("express");
const registerRouter = express.Router();

const registerStudent = require("../controllers/register.controller.js");

registerRouter.post("/", registerStudent); 

module.exports = registerRouter;
