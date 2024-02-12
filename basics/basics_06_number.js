//in js we have number to stores the data like integer,float,decimal and exponical value 
//number can be created using letrals like let n=20; and also by using number object as new Number()
//numbers having some functions as lenagth-> , toFixed() -> gives the number with specified fixed numbers after point ,
//toPrecisions()->gives the precisssion of give number 
// toString()->which converts the given number to string and can be able apply with string properties too 
// also we can convert the bellow conversions
// t=ture ; Number(t)==1, false=0
// t="" ; t=null ; == Number(t)==0
// n1="30";->Number(n1) =30
//n1="30fyuiop"->number(n1)=NaN 
let n=20;
//console.log(Number(n))
let n1="30yuiop";
//console.log(Number(n1))
let n2="30";
//console.log(Number(n2))
let t=true;
//console.log(Number(t));
let t1=null;
//console.log(Number(t1));


// 20
// NaN
// 30
// 1
// 0

//math oparetor wich is having a fixed value like Pi , 
//and also use to perform some matemetical opartions on numbers 
// Math.squre=> to find squre root of number 
// Math.pow => power of number 
// Math.sin() => sing value of number etc...
//Math.round()=> gives the round of value . 
//Math.floor=> gives the round of value to up to the number 
//Math.celi() => gives the round off value down to the number

// console.log(Math.sqrt(64));
// //console.log(Math.pow(8));
// console.log(Math.round(2.3467))
// console.log(Math.floor(4.97));
// console.log(Math.ceil(5.2));


// genaretae random number between 20 to 40 
// normally Math have random() where its generate the data between 0 to 1 ,
// and also it may gives the 0 also , to over come of this alwyas add 1 with random function as 
console.log(Math.random() + 1);
// now we can get data of three degits or more by multiplying with 10's 
console.log((Math.random()*100)+1)
// but the requirment is have to generate the two degits random number between 20 to 
// to achive it take min and max number 
let min=20;
let max=40 ;
console.log(Math.floor((Math.random()*(max-min)+1)+min)) 


 