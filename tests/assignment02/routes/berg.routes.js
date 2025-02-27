const express = require ("express");
const bergRouter = express.Router()

const bergSighting = require("../controllers/berg.controller")

bergRouter.post("/", bergSighting.createBerg)
bergRouter.post("/split/bergId=:bergId", bergSighting.bergSplit)

module.exports = bergRouter;

