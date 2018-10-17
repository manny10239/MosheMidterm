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

// searching for a friend with a name and add them to friend array of user id 1
app.get('/players/addfriend/:name', (req,res) => {
    const friend = fitapp.users.find(c => c.name === String(req.params.name));
    if(!friend){
        res.status(404).send('Friend not Found');
    }
    const mainUser = fitapp.users.find( c => c.id === 1);
    if(mainUser.id === friend.id){
        res.status(400).send('Cannot add yourself as a friend');
    }
    mainUser.friends.push(friend)
    res.send(mainUser);
});




module.exports = app;