// array contains method like map filter and reduce it comes from its perent class named Array
let arr = [1,2,3,4,5]; // this is a wrong way of writing array
// arr = new Array();
// so arr is basically an instance of Array;
console.log(typeof arr);
console.log(typeof Array);
// when we check the type of instance it shows object and when we check typeOf Array it shows function
// this means Array is function as well as object as well
// there's is something known as protoytype 
// that is attached to classes by js engine
// prototype is an object
/**
 * Array -> fn + {prototype}
 * => when an instance created using this fun it will also contain the reference of this prototype object 
 * arr -> [arr elements] + {__proto__}
 * =>__proto__ is a reference which is pointing towards the parents prototype object in this case the __proto__  is refering to the Array prototype object
 * => every prototype object contain __proto__ reference key that is refering to the parent object .
 * => so if we log the Array.__proto__ it will log the prototype of Object it simply means Array is a child of Object basically Object is a super class in js 
 * => in Object.__proto__ it will leads to null because it dosent inherit any property with any of the class 
 */

/**
 * Creta bluePrint => base fn
 * and some extra functionallity like 
 * 1. automatic gear 
 * 2. ABS
 * 
 * if we give this to js engine then it will return us like this
 * Creta => base fn + {prototype}
 * {prototype} -> {
 *                  *automatic gear system
 *                  *ABS 
 *                  *__proto__
 *                  }
 * when we create an obj using this blue print
 * actualCar = new Creata() --> Creata() base function of parent
 * actualCar -> actualCar values/items + {__proto__}
 * {__proto__} -> its refering to the same obj {prototype of parent} it means it also contains the same functionality means we can use it by usning the dot operator
 */
/**
 * so same work in array or in other func
 * Array => base fn
 * and some extra features like 
 * 1. map
 * 2. filter 
 * 3. reduce
 * 
 * if we give this to js engine then it will return us like this
 * Creata =>  base fn + {prototype}
 * {prototype} -> {
 *                   1. map
 *                   2. filter 
 *                   3. reduce
 *                   4. __proto__
 *                  }
 * when we create an obj using this blue print
 * arr = new Array() --> Array() base function of parent
 * arr -> arr values/items + {__proto__}
 * {__proto__} -> its refering to the same obj {prototype of parent} it means it also contains the same functionality means we can use it by usning the dot operator
 * so when use arr.map js engine will first find this functionality in its own prototype obj if its doent found there it will move to the parent prototype 
 * by using the reference __proto__ and start searching there if it finds there it will execute it and if not it will again start searching in its parents prototype
 */