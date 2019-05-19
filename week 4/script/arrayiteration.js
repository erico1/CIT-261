// JS Nuggets
// Array iteration: 8 methods

//  forEach

[1,2,3].forEach(function(item,index){
    console.log(item,index)
});

// map
const three = [1,2,3];
const doubled = three.map(item =>{
    return item *2;
});
    console.log(doubled);

// filter
const ints = [1,2,3];
const evens = ints.filter(item =>{
    return item % 2 === 0;
});
console.log(evens);

// reduce

const sum = [1,2,3].reduce(function(result,item){
    return result + item;
}, 0);
console.log(sum);

// some

const hasNegativeNumbers = [1,2,3,-1,4].some(function(item){
    return item < 0;
});
console.log(hasNegativeNumbers);

// every
const allPositiveNumber = [1,2,3].every(function(item){
    return item > 0;
});
console.log(allPositiveNumber);
// find
const objects = [{id:'a'}, {id:'b'}, {id: 'c'}];
const found = objects.find(function(item){
    return item.id ==='b';
});
console.log(found);

// find index
const objects2 = [{id:'a'}, {id:'b'}, {id: 'c'}];
const foundIndex = objects.findIndex(function(item){
    return item.id ==='b';
});
console.log(foundIndex); 

// Array concat

let a = [2,4,6,8];
let b = [1,3,5];

let c = a.concat(b);
console.log(c);




