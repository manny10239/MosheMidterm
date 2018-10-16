const express = require('express');
const { FitnessApp, Player} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req , res) => {
    res.send(fitapp);
});

app.post('/players', (req , res) => {
    const player = new Player(req.body.name, req.body.age);
    fitapp.users.push(player);
    res.send(player);
});

module.export = app;