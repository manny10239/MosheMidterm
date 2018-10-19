const express = require('express');
const { FitnessApp} = require('./model');

var fitapp = new FitnessApp();
const app = express.Router();

app.get("/", (req, res) => {
    res.send(fitapp);
});
//makes a user
app.post('/users', (req , res) => {
    const user = {
        id: fitapp.users.length + 1,
        name: req.body.name,
        age: req.body.age,
        Bcal: 0,
        Ical: 0,
        calDef: 0,
        friends: [],
        workDone: [],
        intake:[]
    };
     const filuser = {
         name: req.body.name,
         age: req.body.age
     }
    fitapp.filterUser.push(filuser);
    fitapp.users.push(user);
    res.send(filuser);
});
// gets the mainUser with its name
app.get('/users/getUser/:name', (req,res) => {
    const mainUser = fitapp.users.find(c => c.name === String(req.params.name));
    if(!mainUser){
        res.status(404).send('The user with given name not found');
    }
    res.send(mainUser);
});
// add a friend
app.get('/addFriend/:name', (req,res) =>{
    const mainUser = fitapp.users.find(c => c.id ===1);
    const friend = fitapp.users.find(c => c.name === String(req.params.name));
    if(!friend){
        res.status(400).send('User not Found');
    }
    mainUser.friends.push(friend)
    res.send(mainUser);

});
//add workout to the main user
app.get('/workoutDone/:id', (req,res) => {
    const workoutNum = parseInt(req.params.id);
    const mainUser = fitapp.users.find(c => c.id === 1);
    var workout = fitapp.workouts[workoutNum];
    mainUser.workDone.push(workout);
    res.send(mainUser);

});
// calories burned
app.get('/caloriesBurned', (req,res) => {
    const mainUser = fitapp.users.find(c => c.id === 1);
    var burn = parseInt(mainUser.workDone.length * 200);
    if(burn === 0){
        res.status(404),send('You Need to Work Out At Least Once');
    }
    mainUser.Bcal = burn;
    res.send(mainUser);
    
});
// calories eaten
app.post('/nutrition', (req, res) => {
    const mainUser = fitapp.users.find(c => c.id === 1);
    var food = req.body.intake;
    mainUser.intake.push(food);

    const incal = parseInt(mainUser.intake.length * 300);
    mainUser.Ical = incal;
    res.send(mainUser);
});
// giving the user a caloric deficit and storing 
app.get('/caloricDeficit', (req, res) => {
    const mainUser = fitapp.users.find(c => c.id === 1);
    var def = mainUser.Ical - mainUser.Bcal;
    mainUser.calDef = def;
    res.send(mainUser);
});
// trying to display user name and age only 
app.get('/users/stats', (req, res) => {
    res.send(fitapp.filterUser);
});
// friend list stats
app.get('/user/friendsStat', (req, res) => {
    const mainUser = fitapp.users.find(c => c.id === 1);
    res.send(mainUser.friends);
});

module.exports = app;