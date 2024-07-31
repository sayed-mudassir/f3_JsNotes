/**what is polyfill
 *  polyfill is a piece of code used to provide mordern functionallity on older browser that do not natively support it
 */ 
/**
 * Map Polyfill is to make a function whose functionality is simimlar to map
 * [1,2,3].map(callback) callback is funtion that is passed as functional args
 * map will give new same sized array
 * [callback(arr[0]),callback(arr[1]),callback(arr[2])];
 */
const arr = [1,2,3,4];

delete Array.prototype.map; // removing the map features from my js engine to make my own map function

// map takes callback
Array.prototype.map = function(callback){
    const result = []; // result array which we get
    // map simply invoke callback fn for each and every element present inside an array
    for(let i = 0; i<this.length;i++){
        // this -> array which hwe ahve called it.
        result.push(callback(this[i],i,this))

    }
    return result;
}
console.log(arr.map((item,index,arr)=>{
    return `${item*200} at ${index} in ${arr}`;
}))