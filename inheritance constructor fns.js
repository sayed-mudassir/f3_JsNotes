function UserCreator(name,score){
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function(){
    this.score++;
} 
const free = new UserCreator("free",12)
console.log(free);

function PaidUserCreator(name,score,balance){
    // we cannt use new keyword here because the new keyword always create a new memeory and we dont want new memory 
    // to avoid this memory loss we can use the call method here to with the refernce of "this" obj 
    UserCreator.call(this, name, score) // creating basic or free frature for premimum user
    this.balance = balance;
}

// PaidUserCreator.prototype.analysis = function(){
//     console.log("analysis 1")
// }
//  giving the free functionality to the paid user
PaidUserCreator.prototype = Object.create(UserCreator.prototype); // we can also use the setPrototypeOf here also
// adding the premimum functionality to the paid user
PaidUserCreator.prototype.analysis2 = function(){
    console.log("ananlysis 2")
}
const premimum = new PaidUserCreator("paidUser",212,100);
console.log(premimum);
premimum.analysis2();
