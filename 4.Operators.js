//Operators - 6 types

//1. arithmetic operator
const a = () =>{
    let a = 20
    let b = 30
    let c = a+b
    console.log(c);
    
}
a()

const aravind1 = () =>{
    let a = 20
    let b = 10
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b); // quotient
    console.log(a%b); // reminder
    let c = 2
    let d = 3
    console.log(c**d);// c to the power of d
    c++               // c+1
    console.log(c);
    d--              // d-1
    console.log(d);
    
}
aravind1()

//2. equality operator --> value is equal or not, returns boolean value
const aravind = () =>{
    let a = "20"
    let b = 20
    let result = a==b // checks value is equal or not
    console.log(result); 
    let result1 = a===b // checks value and datatype are equal or not
  console.log(result1);
}
aravind()

//3. comparison operator -->returns boolean value
function aravind(){
    let a1 = 20
    let a2 = 30
    console.log(a1>a2);
    console.log(a1<a2);
    console.log(a1<=a2);
    console.log(a1>=a2);
    console.log(a1!=a2); //not equal to
}
aravind()