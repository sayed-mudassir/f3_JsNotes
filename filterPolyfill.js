/**
 * filter polyfill is a fun written by me that works exactally same as .filter fro array
 * it takes callback
 * invoke callback fn for each element of an array 
 * and return a new modified array
 * new array can be a smaller in size 
 */
const arr = [1,2,3,4,5,10,18];
delete Array.prototype.filter; // removing the filter from Array.prototype 

Array.prototype.filter = function(callback){
    const res = [];
    for(let i = 0; i<this.length; i++){
        if(callback(this[i],i,this)){
            res.push(this[i]); // checking the condition before pushing an elment into an array
        }
    }
    return res; // return the filtered array
}
console.log(arr.filter(item=>{
    return item%2 == 0;
}))