/**
 * Bind is nothing but a syntactical sugar of call 
 * it means it return a function which invoke call each time the resulyt fun invokes
 * so we just need to create a new fn 
 * in the new fn invoke call for old fn by passing thr args to old fn
 * 
 */
delete Function.prototype.bind;

Function.prototype.bind = function (obj,...fixedArgs){
    const oldFn = this;// this -> old fn
    return function (...nonFixedArhs){
        return oldFn.call(obj,fixedArgs,nonFixedArhs); 
    }
}
let obj = {
    na : 10
}
function intro (a,b){
    console.log(this.na+" a : "+a, " b : "+b);

}
const newIntro = intro.bind(obj,1);
newIntro("hi");