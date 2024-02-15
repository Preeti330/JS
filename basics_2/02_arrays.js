//sort function of array ;
// to sort the string array we can use sort ()
const a1=[9,3,7,1,8];

//console.log(a1.sort());// [ 1, 3, 7, 8, 9 ]

const a2=["banana","monkey","apple"];
//console.log(a2.sort()); // [ 'apple', 'banana', 'monkey' ]

// sort and reverse() functions modify the original array . so js interduced sortted() and revered() 
//where this two gives new array instaed of modifying old array.

const a3=["3","034","100","26"];
console.log(a3.sort()); //[ '034', '100', '26', '3' ] 
//here in the above example to sort the string with number array use compare fucntion to sort bcz its treat 2 is greater then 1 so its keeps 100 first tthen 26 
// in bellow function if its return positive , if return is negitve value then its negative number , if its returns zero then both a,b are equal.
a3.sort(function(a,b){
    return a-b;
})
console.log(a3)

