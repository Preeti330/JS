// sigleton object - object which creates with new or create keyowrd. 
// non signleton obj - obj created with {}

const obj = new Object();

// merge objects 
obj1={1:"a",2:"b"};
obj2={2:"c",3:"d"};
obj3={4:"d",5:"a"};

// assigin method : its adds one object with other object , takes parametres as scource,target
// for good pratice take {} as scource , all other objects are moving to this empty object
// and its checks with key , if key data is same then its takes the value for second target object as shown bellow 

const obj6=Object.assign({},obj1,obj2,obj3)
// console.log(obj6)

// to merage use spred oprator 
const obj7={...obj1,...obj2};
console.log(obj7)