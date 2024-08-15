/**
 * class is a syntactical sugar over construtor method
 * 
 * under the hood the js work the constructor fn 
 * 
 * function UserCreator(name,score){
        this.name = name;
        this.score = score;
    }
    // adding functionality to obj
    UserCreator.prototype.increment = function(){
        this.score++;
    }
 */
class UserCreator {
    constructor(name,score){
        this.name = name;
        this.score=score;
    }
    increment(){
        this.score++;
    }
}
const user = new UserCreator("user1",56);
console.log(user);
user.increment();
console.log(user)