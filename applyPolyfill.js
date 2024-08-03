/**
 * call accept the number of args while apply accepts only two args one is obj and second is array of args
 * steps for creating apply polyfills
 * 1. add fun defination to obj by creating the temp fun in obj and copy the fn def in this temp fn
 * 2. spread the arr arguments in temp fn if available
 * 3. execute the temp fn and store the result in a variable
 * 4. delete the fn from obj
 * 5. return the result;
 */

delete Function.prototype.apply;
Function.prototype.apply = function(obj,arrArgs){
    obj.tempFn = this;
    let res;
    if(arrArgs){
        res = obj.tempFn(...arrArgs);
    }
    else{
        res = obj.tempFn();
    }
    delete obj.tempFn;
    return res;
}
let obj = {
    na : 10
}
function intro (a,b){
    console.log(this.na+" a : "+a, " b : "+b);

}
intro.apply(obj,[1,2]);