// var -> is gloabl scope , can be re declare , can be reassign 
// let -> is local scope , cant be re declare in same scope, can be reassign 
// due to the property of var , if in case some other developerre declare the same variable then its assgin with newly created variable val 
// so to avoid thi suse let , where its throws error to re declaring. and in other scope it wont be changethe value with global 

var x=30;
let y=300;
// console.log(x,y,"before redeclare"); // 30 300 before redeclare
if(true){
    var x=200;
    let y=90;
// console.log(x,y,"inner scope") ;// 200 90 inner scope
}

// console.log(x,y,"outer scope"); // 200 300 outer scope


// Hoisting 
// moving all declartion to top of scope , i.e using a variable or functionbefore declaring is called hoisting 

m=8;
console.log(m);
var m;
m1=10;
console.log(m1);
// let m1; // const and let variable must be declared before using 




console.log(add(3));
function add(num){
return num+1;
}

// sumof(2,3); // throwa error bcz when we assgin a function to vairable must be declraed first, and also i can say the first function is working as hoiting 
let sumof=function sum(a,b){
    return a+b;
}