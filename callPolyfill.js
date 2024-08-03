/**
 * to make the polyfill of call we must mimic the call functionality
 * for that we need to update the this keyword, so we need to implicitly bind the fn with obj 
 * and execute the execute the fn and after excution delete the fn from obj
 * steps
 * 1. add fun defination to obj by creating the temp fun in obj and copy the fn def in this temp fn
 * 2. spread the restParam in temp fn 
 * 3. execute the temp fn and store the result in a variable
 * 4. delete the fn from obj
 * 5. return the result;
 */

delete Function.prototype.call;
/**
 * "...restParam vs ...spreadOperator"
 * when we use the "..." in funtion parameters it treat as rest param and when we use "..." whle executing fn as args then it will treat as spread operator
 * rest param is used when we are not confirm about the number of parameter fn should takes then we use rest param it will take as many parmeter nas required 
 * it will collect the params in array so we need to spread it while passing as args  
 */
Function.prototype.call = function (obj, ...restParam){
    // step 1 : attaching the fn defination to obj
    obj.tempFn = this; //  where do we have the fn defi 
    const res = obj.tempFn(...restParam);
    delete obj.tempFn;
    return res;
}
let obj = {
    na : 10
}
function intro (a,b){
    console.log(this.na+" a : "+a, " b : "+b);

}
intro.call(obj,1,2);