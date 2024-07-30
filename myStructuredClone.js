/** four steps for creating own structured clone :
 * 
 * step 1 check the type of variable present in an object
 * NOTES: iterate over it and call our function over each property by converting this an array
 
 * step 2 convert this in an array
 * step 3 call deepClone fn on each and every property 
 * step 4 generate obj from deep cloned array 
 */

const object1 = {
    a:"abc",
    b: 10,
    c: {
        d:20
    }
}

const deepClone = (obj)=>{
    //step 1 : check the the parameter obj is an object or not
    const type = typeof obj;
    if(type !== "object" || obj === null) return obj; // it means obj is not an obj so need for deep cloning it. "=" operator will work for it.
    // obj can be array as well.
    // [1,{},"hello"] this is an actual array
    // this is algo for array
    if(Array.isArray(obj)){
        // [1,{},"hello"]
        // [deepClone(1),deepClone({}),deepClone("hello")]
        return obj.map((values)=> deepClone(values))
    }
    // here i am sure it is an object
    // now looping part 
    // convert my object into an array
    const arrObj = Object.entries(obj);
    // Object.entries is used to convert object into an 2d array 
    /**
     * {
     * a:10,
     * b:"klj",
     * c:{
     * d:100
     * }
     * }
     * it will converted into
     * [['a',10],['b','klj'],['c',{d:100}]]
     */
    //Step 2 :  using arrObj I have to make a deep clone version of arrObj

    const deepCloneArr = arrObj.map((item)=>[item[0],deepClone(item[1])]); // step 3 : call deepClone fn on each and every property
    return Object.fromEntries(deepCloneArr); 
    // Object.fromEntries is a reverse method for Object.entries it convert the 2d array to object

}
const object2 = deepClone(object1);
object2.c.d = 96;
console.log(object1);
console.log(object2);