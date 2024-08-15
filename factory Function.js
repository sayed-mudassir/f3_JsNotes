//  Solution 1 of creating object

const FnScore = {
    incremnet : function(){
        this.score++;
    }
}

function userCreator(name, score){
    const user = Object.create(FnScore);
    user.name = name;
    user.score = score;
    return user;
}

const obj1 = userCreator("obj1",10);
const obj2 = userCreator("obj2",12);

console.log(obj1,obj2);
obj1.incremnet();
obj2.incremnet();
console.log(obj1,obj2)