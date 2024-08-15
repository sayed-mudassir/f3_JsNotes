// creating obj usinh new keyword
/**
 * new keyword always create new memory and store the temp value
 * the function UserCreator runs in the context of new memory created
 * and return the temp obj to user
 */

function UserCreator(name,score){
    this.name = name;
    this.score = score;
}
// adding functionality to obj
UserCreator.prototype.increment = function(){
    this.score++;
}
UserCreator.prototype.increment2 = function(){
    // here the value of this is whatever obj you are calling with it
    function add(){
        this.score++;
    }
    // use arrow fn intstead of normal fn
    add.call(this);
}

// creating obj usning usercreator fn with the help of new keyword
const user = new UserCreator("user1",50);
user.increment();
console.log(user);
