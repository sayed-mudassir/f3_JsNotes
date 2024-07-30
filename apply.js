//  there is no differnece between call and apply until you are not passing functional arguments
let obj = {
    nam : "ask"
}

function intro(comp,loaction){
    console.log("your name is "+ this.nam+" you worked at "+ comp+ " and your loaction is "+ loaction);
}

// to pass the functional arguments we should remember the rule 
// 1st argument will be always object to which we want to bind the function
// in apply the functional arguments will always be passed in the form of array
intro.apply(obj,["google","bangolore"]); // like this 

// in case of call ---> obj context, args1,args2,args2.....
// in case of apply ---> obj context,[args1,args2,args3....]

// call can accept infinite args
// apply can accept only two args 1 is obj context and 2 is agrument array