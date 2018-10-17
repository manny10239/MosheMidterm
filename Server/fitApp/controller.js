const express = require('express');
const { FitnessApp, Player} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req, res) => {
    res.send(fitapp);
});
//makes a players
app.post('/players', (req , res) => {
    const player = {
        id: fitapp.users.length + 1,
        name: req.body.name,
        friends: [],
        workDone: []
    };
    fitapp.users.push(player);
    res.send(player);
});
// gets the player with its id
app.get('/players/:id', (req,res) => {
    const player = fitapp.users.find(c => c.id === parseInt(req.params.id));
    if(!player){
        res.status(404).send('The user with given ID was found');
    }
    res.send(player);
});
//changes with id a player name
app.put('/players/:id', (req,res) => {
    const player = fitapp.users.find(c => c.id === parseInt(req.params.id));
    if(!player){
        res.status(404).send('The user with given ID was found');
    }
    player.name = req.body.name;
    res.send(player);
});

//add friend to friend array
app.put('/players/addfriend/:id', (req, res) => {
    const player = fitapp.users.find(c => c.id === parseInt(req.params.id));
    if(!player){
        res.status(404).send('The user with given ID was found');
    }
    const user = fitapp.users.find(c => c.id === 1);
    user.friends.push(player);
    res.send(user);
});



module.exports = app;