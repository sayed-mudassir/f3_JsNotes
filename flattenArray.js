const arr = [0,1,[2,[3,[4,5]]]];

const myFlat = (arr)=>{
    const res =[];

    arr.forEach(element => {
        if(Array.isArray(element)){
            // [2,[3,[4,5]]]
            const newFlat = myFlat(element);
            // [2,3,4,5]
            res.push(...newFlat);
        }
        else{
            res.push(element);
        }
    });

    return res;
}
console.log(myFlat(arr))