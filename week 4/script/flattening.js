
// Flattening using concat

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = "";
let result = newArray.concat(arrays);
console.log(result);


// Flattening using reduce and concat

let myNewArray = arrays.reduce(function(a,b){
    return a.concat(b);
},[]);
console.log(myNewArray);