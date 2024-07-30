var age = 10;
var person = {
    name : "popo",
    age : 24,
    getAge: function (){
        return this.age;
    }
}
var person2 = {
    age : 28
}
console.log(person.getAge.call(person2));// here the this will be person2 so the output will be 28
console.log(person.getAge.call(window));// here the this will be window so the output will be 10
console.log(person.getAge()); // implicit binding the this will be person1 so the output will be 24