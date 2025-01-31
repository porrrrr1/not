const express = require('express');
const router = express.Router();
const controllers = require('../controllers/server.controller');

app.post("/", controllers.create);      // POST /cameras
app.get("/", controllers.get);         // GET /cameras
app.get("/:id", controllers.getId);    // GET /cameras/:id
app.get("/ip/:ip", controllers.getIp); // GET /cameras/ip/:ip

module.exports = app;
