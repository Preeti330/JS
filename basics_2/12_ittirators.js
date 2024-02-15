//ittirators are use to perfom some functions om array as like read and perfom some specific action on array
//1.forEach() -> which use to read array elements , and its takes a call back function to read array elements and it wont return anything
//2.map() -> ittirator over an array and create new array by perfoming some action , can be use chnage the original array 
//3.filter -> ittiratirs over an array , and returns the new array with elements which all passes consdtion 
//4.some -> ittiraors array and return ture or false on condition 
//5.reduce -> ittirators over array and reduce the array to an value 


const a=[10,20,30,40];

// a.forEach(i => {
//     console.log(i)
// });

// a.forEach(function (item) {
//     console.log(item)
// });

let x= a.map(function add(item){
    return item+10;
});

// console.log(x);



let y= a.filter(function filterarray(item){
    return item > 30
});

// console.log(y);

let z=a.some(function filterarray(item){
    return item >30
});
// console.log(z);

let z1=a.reduce(function reducearray(total,item){
    console.log(total,item)
    return total+item;
},100);

// its takes two value or three total as accumalator which is assigined with intail value i.e 100 we send in above function and item referfs to arry value 
//intially total assigined to 100, then perfomr total+item ; and only one time the value get assigns here . 

 console.log(z1);return;

// if we dont use scope("{...code....}") then the above ittiratirs return data with return keyword

let z2=a.filter((item)=>item>20);
// console.log(z2);


//get the all people staying in bangle
let person=[
    {
        "id":101,
        "name":"preeti",
        "loc":"banglr"
    },

    {
        "id":102,
        "name":"mudaka",
        "loc":"pune"
    },

    {
        "id":103,
        "name":"rachu",
        "loc":"banglr"
    },
    {
        "id":104,
        "name":"amogh",
        "loc":"mysore"
    },
];

let person1=person.filter((item)=>item.loc=='banglr');
// console.log(person1);

// change location of all peroples to mysore 

let p2=person.map(function change(item,index,array){
    if(item.loc){
        item.loc='bangalore';
    }
    return item;
} );
console.log(p2);