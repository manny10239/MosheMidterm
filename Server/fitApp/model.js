const friends = [

];
class Player{
    constructor(name){
        this.name = name;
        this.points = 0;
    }
}
class FitnessApp{
    constructor(){
        this.users = [];
        this.workouts = [];
        this.workDone = [];
        console.log("The app constructor");
    }
}
module.exports = {
    Player , FitnessApp
}
