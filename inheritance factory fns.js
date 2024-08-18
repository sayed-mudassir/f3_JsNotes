/**
 * here we are gonna learn about inheritance by the help of an example
 * we are creating an user account 
 * here are two type of account free account and paid account
 * so every paid user are able to use the functionality of free user as well as premimum functionality
 * and free user are not able to use the premimum functionality
 * so for that we are going to use the inheritance 
 * we need to inherit the free parent properties in the paid child object so that he will be able to use the parent functionality   
 */

const freeFns = {
    increment() {
        this.score++;
    },
};
const paidFns = {
    analysis(){
        console.log("this is analysis");
    }
}
// paidFns.prototype.__proto__ = freeFns;
Object.setPrototypeOf(paidFns,freeFns); // setProtypeOf is a inbuilt method which is use to change the __proto__ chain of a  specified object
// this is how it works   1 ----> 2 , first we should write the obj whose chain should be alter and second the target parent         

function userCreator(name,score){
    const user = Object.create(freeFns);
    user.name = name;
    user.score = score;
    return user;
}

function paidUserCreator(name,score,balance){
    const paidUser = userCreator(name,score); // creating free user
    Object.setPrototypeOf(paidUser,paidFns); // giving the premimum functionality to paid user by altering the __proto__ chain  
    paidUser.balance = balance; // adding extra attribute
    return paidUser;
}
const paidUser = paidUserCreator("paidUser",105,600);
paidUser.analysis(); // able to accesss premimum functions
console.log(paidUser)
paidUser.increment(); // able to access free functions
console.log(paidUser);

const freeUser = userCreator("freeUser",100); 
console.log(freeUser);
freeUser.increment(); // able to access the free functions
console.log(freeUser)
// freeUser.analysis(); not able to access the premimum freature
// console.log(freeUser)