/**
 * TYPE OF OBJECT CLONING IN JS
 * There are two types of obj cloninging js:
 * Shallow Cloning: when a cloned object contain the reference of previous obj.
 * Deep Cloning : when a cloned object doesnt store any reference of previous object
 */

//1. method one using "=" assignment operator : shallow clone
// let prevObj = {
//   a: 10,
//   b: 20,
// };
// let clonedObj = prevObj;

// console.log("previous object");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);

// clonedObj.a = 20;
// clonedObj.b = 405;
// console.log(
//   "here we can clearly see that if we perform any change in cloned object the previous object also get get change exactly"
//   +"this is because assignment operator (=) will copy the reference of previous object in cloned so baisically both of them are same obj so this is a shallow cloning"
// );
// console.log("previous object ");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);

// 2. second method using (...) spread operator: shallow clone
// let prevObj = {
//   a: 10,
//   b: 20,
//   c :{
//     d:120
//   }
// };
// let clonedObj = { ...prevObj };

// console.log("previous object");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);

// clonedObj.a = 20;
// clonedObj.b = 405;
// clonedObj.c.d = 900;

// console.log(
//   "it works fine for premitive value but if the element of obj is also an object the it shows same problem as assignment operator" +
//     "this is because spread oerator use assignment operator (=) to copy every element present in obj1 to obj2 it works fine for premitive values"+
//     "but when it encounter an object as element it will behave same it will copy the reference of that obj and store it in that key if it contains reference of previous obj then it is also a shallow clone"
// );
// console.log("previous object ");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);

// 3. third method using .stringify and .parse: deep clone
// let prevObj = {
//   a: 10,
//   b: 20,
//   c :{
//     d:120
//   }
// };
// let str = JSON.stringify(prevObj);
// let clonedObj = JSON.parse(str);

// console.log("previous object");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);

// clonedObj.a = 20;
// clonedObj.b = 405;
// clonedObj.c.d = 900;

// console.log("it works fine because it convert whole object into string and then again convert it to json and store it that's why it doesn't contain any reference");
// console.log("previous object ");
// console.log(prevObj);
// console.log("cloned object");
// console.log(clonedObj);
