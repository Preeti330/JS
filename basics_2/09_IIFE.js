//iife -> immdeiatlly invoked functions 
// i.e after creating function its immdiatly invokes, 
// i.e no need to call , it uses in cases where its nesccery excuting function the time script get loads . ex : db connections
// and also iife used to resolve poilting of global scope . 
// i.e it keeps variable or members as private to avoid the global poilting 
//syntax : (function....)();

(function display(){
    console.log("Say Hii ....!!");
})();

// arrow function with parms 
((name)=>{
    console.log(name);
})("preeti");