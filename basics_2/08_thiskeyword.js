// this keyword refers base on how it invokes 
// if this invokes with objects then it refers to object 
// if this used in function its refers to global scope [object window]
//if this used alone then it refers to global scope 
// if this used with use strict type then its undefined 
// if this is used in arrow function, it refers to global 

let obj1={
    name:"preeti",
    age:24,
    display:function(){
        console.log(this.name); // refers to an object context 
    }

}

console.log(obj1.display());

class A{
    constructor(){
       let  text="i am form consturactor";
    }
}

let a1=new A();
console.log(this); // in node its gives {} an empty object instaed og global scope 


function checkMyscope(){
    // console.log(this); // refers to gloabl scope 
   let  u="hiii";
//    console.log(this.u);// undefined , we cant access function variables using this 
}

checkMyscope();

let getval = () => {
    let username="prrttt";
    // console.log(this.username); // undefined 
    console.log(this); // returns empty object i.e global scope
  }


getval();

// arrow function with objs
let obj2=()=>({name:"ooo"});
console.log(obj2().name);

let obj3=()=>{name:"ooo"}; 
// console.log(obj3.name);
