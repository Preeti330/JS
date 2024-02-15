//create symbol and use it as key in object 
// data type of symbol is symbole , primitive 
// created using new Symbol 
const sym=Symbol("key1");

// use in inside object 
const obj={
    name:"preeti",
    age:22,
    loc:"bangle",
    [sym]:"check symbol" // to use sym as key should be awlasy in []
} 

// console.log(obj[sym]); // always use symbol in [] else it throws error with .
// console.log(obj);

// check symbol
// {
//   name: 'preeti',
//   age: 22,
//   loc: 'bangle',
//   [Symbol(key1)]: 'check symbol'
// }

// create an object and add function 
const obj2={
    name:"mudaka",
    age:22
}

obj2.sayhi=function(){
    console.log("hey world");
}

console.log(obj2.sayhi())

obj2.diplayname=function(){
    console.log(`hey , ${obj2.name}`)
}

console.log(obj2.diplayname());