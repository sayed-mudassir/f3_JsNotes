/**
 * using nestewd callback is known as callback hell
 * to control the flow of async statement we can use the callback hell
 */
// we are faking the async fn
function intro(name,callback){
    setTimeout(()=>{
        callback (`hi my name is ${name}`);
    },1500);
}
function birthplace(city,callback){
    setTimeout(()=>{
        callback (`hi my birthplace  is ${city}`);
    },1000);
}
function cityInfo(state,callback){
    setTimeout(()=>{
        callback (`hi my name is ${state}`);
    },500);
}
// sync variable is accepting async result
intro("intro",(name)=>{
    console.log(name);
    // to get rhe birthpace details after the intero we should call the birthplace here only
    birthplace("birthplace",(name)=>{
        console.log(name)
        cityInfo("cityInfo",(name)=>{
            console.log(name);
        });
    })
});
/**
 * problems with callback hell
 * 1. it looks ugly
 * 2. we are dependent on previous callback executions 
 * 3. no error handling
 */