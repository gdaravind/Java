// Loops in Javascript are used to execute a block of code repeatedly, either a set number of times or while a condition is true.

//JavaScript supports several types of loops

//1. For Loop
//2. while Loop
//3. Do While Loop
//4. For in
//5. For of

//1. for loop

//syntax -> for(initialization;condition;iteration)

for(let a = 1;a<=5;a++){
    console.log(a);
    
}


//2. while loop

//syntax 
    // initialization
    // while(condition){
    // console
    // iteration
    // }

let b = 5
while(b>=0){
   console.log(b)
   b--
}


//3. do while loop

let c = 1
do{
    console.log("Anu");
    c++
}while(c<=5)


//4. for of - separate elements inside array

let days = ["sun","mon","tues","wed","thurs","fri","sat"]
for(separate of days){   //separate - variable name
    console.log(separate);
}


//5. for in - separate elements inside object

let obj = {
    name :"Anu",
    place: "cbe",
    gender: "female",
}
for(result in obj){
    console.log(result+" : "+obj[result]);
}
