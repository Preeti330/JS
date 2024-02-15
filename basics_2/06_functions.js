// functions are do some work or action 
//they wont invoke untill we call functions 
//function can return the data 
// after the retuen statment no code is excutes 
// function can be stroed in variable in JS 
// JS have arrow functions too where its reduce the synatx of function and it uses the arrows to declare function and 
// its always excutes the single line of code 
// and this keyword in function refres to global scope = [Object window]
//Syntax : function function_name(param){ code.....}

function display(){
    // console.log("hey preeti"); // hey preeti
}

display();

// function returning a value
function sum(a,b){
    return a+b;
}

var sumdat=sum(2,9);
// console.log(sumdat); //11

// how to pass number of parmters at once , here use spred oprator to pass all variables at one time 

function getAllParms(...nums){
    return nums;
}

// console.log(getAllParms(200,3,6,89)); // [ 200, 3, 6, 89 ]

function getParms(val1,val2,...num){
    return [val1,val2,num];
}

console.log(getParms(2,3,89,90))

