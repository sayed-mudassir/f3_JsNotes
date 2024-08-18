/**
 * Extends and super keyword used in class inheritance 
 * Extends under hood works child.prototype.__proto__ = parent.prototype
 * child.__proto__ = parent // this ensure that super keyword has access to parents construtor
 * Super keyword baiscally calling the constructor fun of parent
 * Super keywords creates new memory here not the constructor fns
 * this simply means ==>
    * child = fn + {
        prototype:{
            __proto__ --> parent.prototype // pointing to parent's prototype
        }
        __proto__ --> parent // pointing to parent
    }
   * constructor(name,score,balance){
 *      // before the value of this is undefined because we are usnig extends keyword
        super(name,score); --> new memory creates here
        this.balance = balance
    }
 */
class freeUser{
    constructor(name,score){
        this.name = name;
        this.score = score
    }
    increment(){
        this.score++;
    }
}
class paidUser extends freeUser{
    constructor(name,score,balance){
        super(name,score);
        this.balance = balance
    }
    analysis(){
        console.log("this is paid user")
    }
}
const premimumUser = new paidUser("paid",10,12);
premimumUser.increment() // free features
console.log(premimumUser);
premimumUser.analysis() // paid freature

/**
 * extends 
 * 1. paidUser.prototype.__proto__ = freeUser.prototype
 * with these i can access the freeUser fns
 * 
 * 2. paidUser.__proto__ = freeUser
 * we need constructoe fns inside my paidUser class which enventually super keyword will use
 * 
 * super 
 * 1. its is responsible for creating a new memory
 * 2. super keyowrd should be the first thing that should be called in the inherited class constructor 
 */


/** output
 * paidUser {name: 'paid', score: 10, balance: 12}
 * balance: 12
name: "paid"
score: 10
[[Prototype]]: freeUser
analysis: ƒ analysis()
constructor: class paidUser
[[Prototype]]: Object
paidUser.__proto__ ----> 
class freeUser{
    constructor(name,score){
        this.name = name;
        this.score = score
    }
    increment(){
        this.score++;
    }
}
paidUser.prototype.__proto__
{increment: ƒ}
constructor: class freeUser
increment: ƒ increment()
[[Prototype]]: Object

 */
