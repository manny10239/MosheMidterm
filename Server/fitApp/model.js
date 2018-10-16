const friends = [

];
class Player{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.points = 0;
    }
}
class FitnessApp{
    constructor(){
        this.users = [];
        this.workouts = [];
        this.workDone = [];
    }
}
module.exports = {
    Player , FitnessApp
}
