/**
 * implicit binding : by default the this keyword id binded with windows object in js this is know as implicit binding
 * explicit binding : changing the this value from window object to desired object forcefully.
 */
// call bind and apply is as method of js function just like map , filter and reduce are the method for js array
let obj = {
    nam : "ask"
}
function print(){
    console.log("your name is "+ this.nam); // here by default this is denoting the windows object and window obj doesnt contain any "nam" key so it will be undefined
}
print()  // this keyWord => window (implicit binding)
// call method is used to explicitly bind the funcion to a desired obj here the parameter is passed in call fn not in print fn 
// and call method takes object as parameter and it will also excute print function
print.call(obj); // this keyWord => obj (explicit binding)

function intro(comp,loaction){
    console.log("your name is "+ this.nam+" you worked at "+ comp+ " and your loaction is "+ loaction);
}

// to pass the functional arguments we should remember the rule 
// 1st argument will be always object to which we want to bind the function
// later on we can pass as many arguments we want
intro.call(obj,"google","bangolore"); // like this 