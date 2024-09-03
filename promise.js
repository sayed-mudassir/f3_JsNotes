/**
 * Promise is a constructor function takes a callback, this callback fn has access to 2 fn resolve and reject
 * use it with a new keyword so it gives an object
 * this object representing the eventual completion or failure of an asynchronous operation.
 * It allows you to handle asynchronous tasks more effectively than using callbacks.
 * 
 * States of a Promise:
 * Pending: The initial state, neither fulfilled nor rejected.
 * Fulfilled: , and the promise has aThe operation completed successfully resolved value.
 * Rejected: The operation failed, and the promise has a reason for the failure (an error).
 */
const p1 = new Promise((resolve, reject)=>{
    const condition = false;
    if(condition){
        setTimeout(()=>{
            resolve("the promise is resolves sucessfully");
        },1000);
    }
    else{
        reject("p1 has been rejected");
    }
})
// console.log(p1);
// -------------------------------------------------
// promise are not handling errors we need to fiure out something to handle errors
// .then is just a way provide promise callback fn to reslove
// what ever the callback fn returns .then will use that data to create the fullfilled promise
// and when promise get rejected we use .catch to handle err and disaplay the error message properly
p1.then((data)=>{
    console.log(data)
    return "this is new promise comes from .then"
    // .then is also a returns a new promise
}).then((data)=>{
    console.log(data)
    // so every .then returns a new promise it can be fullfilled or rejecteed
}).catch((data)=>{
    console.log(data)
})
