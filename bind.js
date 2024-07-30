const obj1 = {
    nam : "abcd",
    age:12
};
// currently this function is implicitly binded with window object 
function intro (city,workplace){
    console.log(this.nam + " is your name "+ workplace + " here you work "+ city + " here you are loacted at")
}
// call & apply were immidieatly invoking the function with the given object 
// they basically upadate a this keyword value with obj this is temperory binded with obj  

// bind will give you a new function which is permantely binded with the obj
// this key word is permanently binded  
const newIntro = intro.bind(obj1);
newIntro("alld","google");

//  we can also bind the functional argument, but we should follow the left to right direction and first argument should be object
const fixedArgsIntro = intro.bind(obj1,"alld");
fixedArgsIntro("wallmart ");