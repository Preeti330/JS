// array -> it has continuous memory allocations to store the homogenious  data.
// array can be accessed by using the index. 
//array is created using [] or using new Array() object 
// array length -> gives the number of elements in array 
// some of functions of array are 
// at[] -> read the array data using index , its takes both postive and negitive 
// push -> add the new element to array at end of index
// unshift -> add the new element to array at intial index .
//pop -> remove the element at last index of an array .
//shift -> remove the element at first index of an array 
// reverese() -> reverse the given array 
// slice() -> remove an array form start index to end index . and its gives the new array , instaed of changing in old array 
// splice(index,end)-> remove an array element form start to including end index , and its modify the old array . 
// ex array1.slice(2,3) -> 

//contcat -> which combaines the arrays 
//indexOf -> find the element in array and returns the index of an element , if element is not found then give -1 
//includes -> check where the array is having the given element if it present then gives ture else false

// convert array to string 
// toString() and join() works for it 

let a1=[2,3,5,7,9]
//console.log(a1);
//console.log(a1.length); //5
// // console.log(a1.reverse()); // [ 9, 7, 5, 3, 2 ]
// console.log(a1, a1.pop()); // [ 2, 3, 5, 7 ] 9
// console.log(a1, a1.shift()); //[ 3, 5, 7 ]
// console.log(a1,a1.push(4)); // [ 3, 5, 7, 4 ] 
// console.log(a1,a1.unshift(10)); // [ 10, 3, 5, 7, 4 ]
//console.log(a1.concat([78,33])); // [2,  3,  5, 7,9, 78, 33]

//console.log(a1.join()); // converts the array to string 2,3,5,7,9
//console.log(a1.toString()); // converts the array to string 2,3,5,7,9


// Merge arrays .
// to merge array use the concat function but , its returns the new array insteaed of modifying old
// so use spread oprator : i.e it uses the three dots , to merage the array . 

const a2=[2,4,6];
const a3=a2.concat([1,3,5]);
// console.log(a2); // [ 2, 4, 6 ]
// console.log(a3); // [ 2, 4, 6, 1, 3, 5 ]

let a5=[7,10,22];
const a4=[...a2,...a5]; // speard oprator
//console.log(a4);

const a6=[1,4,[2,5],5,[6,9,[10,23]]];
// use flat function to get all this array in one dimention array  or to resolve this array as we want.
// and flat(depth ) -> takes depth where it says that how many depth you want to resolve the array to simple form ,
// in array a6 it having two indepths , can be given as 2 or infinty array itself take of care depths and convert it simple array

// console.log(a6.flat(1)); // [ 1, 4, 2, 5, 5, 6, 9, [ 10, 23 ] ]
// console.log(a6.flat(Infinity)); //[1, 4,  2,  5, 5,6, 9, 10, 23]

// find the given array is array 
// using isArray and also using consturactor property 
// console.log(Array.isArray(a6)); // ture
// console.log(Array.isArray("preeti")); // false

// create an array , use form to create an array form string 
const a7=Array.from("preetii");
console.log(a7); 

// when we pass the other objects create an array then its returns an empty array bcz , in form we have to metio that what is key and value to create incase of we send objc
// and form with object returns and empty array 
const a8=Array.from({name:"preeti"});
console.log(a8)

// Array.of() function whcih takes parameters to create an array 
let s1=100,s2=200,s3=400;
console.log(Array.of(s1,s2,s3)); //[ 100, 200, 400 ]
