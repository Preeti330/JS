let m=new Map();
m.set("id",202);
m.set("name","preeti");
m.set("age","24");

// console.log(m)

// apply array destarcturing to read the map or obj value using for of loop 
// array destarcturing -> extract a value of an array and assigin to a variable,  
for(const [x,y] of m){
    // console.log(x + '=>' +y)
}

m.forEach((i,j)=> {
    console.log(i,j)
});

const obj={
    "id":"203",
    "name":"mudaka",
     "age":22
}

// foreach and for of cant work with obj to itterate obj , use for in loop
// for(let [x,y] of obj){
//     console.log(x + '=>' +y)
// }
    
for(let i in obj){
console.log(obj[i]+"   j"+obj[l])
}
