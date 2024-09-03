function intro(name){
    return new Promise((resolve, reject) => {
        const condition = true;
        if(condition){
            setTimeout(()=>{
                resolve(`hi my name is ${name}`)
            })
        }
        else{
            reject("intro promise was rejected")
        }
    })
}

function workPlace(company){
    return new Promise((resolve, reject) => {
        const condition = true;
        if(condition){
            setTimeout(()=>{
                resolve(`I am working in ${company}`)
            })
        }
        else{
            reject("workplace promise was rejected")
        }
    })
}
function birtPLace(city){
    return new Promise((resolve, reject) => {
        const condition = true;
        if(condition){
            setTimeout(()=>{
                resolve(`I am living in ${city}`)
            })
        }
        else{
            reject("birthplace promise was rejected")
        }
    })
}

// intro("intro Promise").then((data)=>{
//     console.log(data)
//     workPlace("work place promise").then((data)=>{
//         console.log(data)
//         birtPLace("bith place promsie").then((data)=>{
//             console.log(data)
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch((err=>{
//         console.log(err);
//     }))
// })
// .catch((err)=>{
//     console.log(err);
// })
//  more optimize way to optimize this promise hell 
intro("intro Promise").then((data)=>{
    console.log(data)
    return workPlace("workplace Promise")
}).then((data)=>{
    console.log(data)
    return birtPLace("birthplace Promise")
}).then((data)=>{
    console.log(data)
}).catch((err=>{
    console.log(err);
}))