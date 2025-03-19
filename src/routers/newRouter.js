const express = require("express");
const { newController } = require("../controllers/newController");
const newRouter = express.Router();

newRouter.post("/", newController);

module.exports = { newRouter }