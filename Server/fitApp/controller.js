const express = require('express');
const { FitnessApp, Player} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req, res) => {
    res.send(fitapp);
});

app.post('/players', (req , res) => {
    const player = {
        id: fitapp.users.length + 1,
        name: req.body.name
    };
    fitapp.users.push(player);
    res.send(player);
});

app.get('/players/:id', (req,res) => {
    const player = fitapp.users.find(c => c.id === parseInt(req.params.id));
    if(!player){
        res.status(404).send('The user with given ID was found');
    }
    res.send(player);
});

app.put('/players/:id', (req,res) => {
    const player = fitapp.users.find(c => c.id === parseInt(req.params.id));
    if(!player){
        res.status(404).send('The user with given ID was found');
    }
    player.name = req.body.name;
    res.send(player);
});

module.exports = app;