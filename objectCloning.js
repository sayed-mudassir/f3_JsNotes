/**
 * TYPE OF OBJECT CLONING IN JS
 * There are two types of obj cloninging js:
 * Shallow Cloning: when a cloned object contain the reference of previous obj.
 * Deep Cloning : when a cloned object doesnt store any reference of previous object
 */

//1. method one using "=" assignment operator
let prevObj = {
    a:10,
    b:20
};
let clonedObj = prevObj;

console.log("previous object");
console.log(prevObj);
console.log("cloned object")
console.log(clonedObj);

clonedObj.a =  20;
console.log("her e we can clearlyt see that if we ")
console.log("previous object ");
console.log(prevObj);
console.log("cloned object")
console.log(clonedObj);
