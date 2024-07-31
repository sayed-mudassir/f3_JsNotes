// inheritance means accessing properties of parent
/**
 * we already know about __proto__ 
 * we can change the value of __proto__ and assigning the new parent to them 
 */
let obj1 = {
    name : "obj1"
}
let obj2 = {
    name : "obj2",
    city : "alld",
    getDetails(){
    console.log(`here the value of this keyword is ${this.name} because we are calling this function by the reference of ${this.name} , I lived in ${this.city}`)
    }
}
// we need to link the obj2 with obj1 to inherit the properties of obj 2 
obj1.__proto__ = obj2
// this is how we link by breaking the natural reference and assigning the new obj to them
console.log(obj1.city);
// NOTES => remember js engine will search first in own obj if it would not able to find it in there then only it will move to the praent obj only
console.log(obj1.name); // it will print obj1 because it will search first in itself.

obj1.getDetails() // here the this value will be obj1 because we are calling fn by the reference of obj1 only