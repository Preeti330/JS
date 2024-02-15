//for loop 
for(let i=0;i<2;i++){
    console.log("I am form for "+i);
}
let j=1;
while(j<3){
    console.log("I am form while "+j)
    j++;
}
let k=1;
do{
    console.log("I am form do while "+k);
    k++;
}while(k<3);


//for each which use for reading array 

array=[4,5,6,7];
array.forEach(element => {
    console.log(" Array Foreach element : "+element)
});

for(let a in array ){
    console.log("for in gives index value of an array "+a);
}

for(let i of array){
    console.log("for of gives index value of an array "+i)
}