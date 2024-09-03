/**
 * for in loop is travese the whole object and when it conpletes the iteartion it start jumps on proto object
 */
let obj = {
    a : 2,
    b : "2"
}
Object.prototype.test = "something"
for (const key in obj) {
    console.log(key)
}

// dot notation ussally follow the proto chain
// we need to figure out a way such that we are able to check if any particular property belongs to my object
// if it is part of proto chain

for (const key in obj){
    if (obj.hasOwnProperty(key)) {
        console.log(key)  
    }
    console.log(obj.hasOwnProperty(key))
}
// hasOwnProperty() give us a boolean value
// it is use to check that if the value is my own object or my prototype
// it the key is present is my own property it will rreturn true
// o if the key is not my own property it is basically my inherited property then it will return false
