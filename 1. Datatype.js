// Print statement 
console.log("Hello Java");

// Data Types
// Primitive --> String,Number,Boolean,Bigint,Null,Undefined
// Non primitive --> Array,object,Function

//string
console.log(typeof "Aravind");
console.log(typeof 'Aravind');
console.log(typeof `Aravind`);

//number
console.log(typeof 123);
console.log(typeof 32.5);

//boolean
console.log(typeof true);
console.log(typeof false);

//bigint
console.log(typeof 2617364n);

//null
let f = null
console.log(f);

//undefined
let d;
console.log(d);

//non-primitive

//array --> multiple values can be stored, can be of any data types
let ab = [1,2,3,4,5]
console.log(typeof ab)

let ac = [1,2,3,4,"Aravind",true]
console.log(typeof ac);

let bb = ["Aadharsh","Aravind"]
console.log(typeof bb);

//object --> eg. biodata
let obj = {
    name:"Aravind",
    age:24,
    location:"Cbe" 
}
console.log(obj);

//function 
function name1() {
    console.log("Welcome");
}
name1()