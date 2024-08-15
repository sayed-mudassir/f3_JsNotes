/**
 * we can create the object by using {} and new Object({}) 
 * and we can use Object.create(desired parent obj) 
 * Object.create help us to link new obj whose __proto__ is linked with our desired object
 */

//====> method 1 : 
const obj1  = {
}
obj1.name = "obj1";
obj1.age = 12;
obj1.increment = ()=>{
    this.age++;
}
console.log(obj1);
// ====> method 2 : 
const obj2 = new Object({
    name : "obj2",
    age : 10,
    increment : ()=>{
        this.age++;
    }
});
console.log(obj2);
//  method 1 and 2 are exactly same infact method 1 done the same process as method 2 in js engine
// so while creating this type obj which contains fn as key it will take extra space in heap
// to avoid this space thing we can use prototypicall chaining 
const obj3 = new Object({
    name : "obj3",
    age : 10,
});
// Object.prototype.increment = ()=>{
//     this.age++;
// }
// in this method the major flaw is incremnet fn is exposed globally  it means now any obj can explore like array becoz Obj is super object means every thing in js 
// is ultimaltely inherited by object 

//  to fix this we can use an other techniques changing __proto__ chaining
const objref = {
    increment (){
        this.age++;
    }
}
obj3.__proto__ = objref;
// this is how we can change prototypical chaining
console.log(obj3);
obj3.increment();
console.log(obj3)

// ===========> Method 3 Object.create
// to avoid this type of complex method we can use object.create

const obj4 = Object.create(objref); // this line shows that obj4.__proto__ = objref
obj4.age = 12;
obj4.name = "obj4";

console.log(obj4);
obj4.increment();
console.log(obj4)



