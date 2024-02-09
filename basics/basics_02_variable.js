//variabele is conatiner to store data .
// variables we have in JS are const ,let and var 
//var -> having global scope, can be reassgin,and re declare , and when we not declare  the variable its take it as undefined .
//const -> block scope , variable should be declared with value , and cant be reassign,re declare or mopdify the data 
//let -> block scope , can be reassigned , and cant be re declare in same scope . and when its declareing in blcok should be asssigned with value 

const userId="UI1001";
var username="Preeti";
let depratment="TECH";
//print all variable in one time use console.table 
console.table([userId,username,depratment]);

//block scope 
function display(){
    username="Raj";
    let depratment="IT";
    console.log(username,depratment);
}
display();
console.log(username,depratment);



