const workouts = require('./workouts');

class FitnessApp{
    constructor(){
        this.users = [];
        this.workouts = workouts;
        this.filterUser = [];
    
    }
}
module.exports = {
    FitnessApp
}
