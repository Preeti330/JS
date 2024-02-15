// obj destracturing 
// is syntax for extracting value form an object and assiging to a variable is called destractureing 
// this is interduced in ES6 , to avoid the accessing object varibale always with refrence of obj.keyname
// when we use var ,let const to bind the objects then based on scope of this variable it uses .
//i.e if objs is destracutred as const then data can be only read , if its destractured with let then it can be reassgined as well 


let obj1={
    1:"preeti",
    age:"24"
}
const {age}=obj1;
// console.log(age);

const {1:name}=obj1;

// console.log(name);
// re assign value 
let {age:age1}=obj1;
age1=29;
//console.log(age,age1,obj1);

let obj2={
    username1:"preeti",
    age:"24",
    loc:{
        "city":"banglr"
    }
}

const {username1,loc:{city:cityname}}=obj2;
// const {loc.city}=obj2;

console.log(cityname);


//Array Destarcutring 
const x=[2,3,4,9]
let [a,b,...c]=x;
// console.log(a,b,c);
// c=29;
let [,,,a1]=x; // to skip the position 
console.log(a1,c); 
