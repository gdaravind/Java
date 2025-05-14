//function -->block of code--> 4 types
function name1() {
    console.log("Welcome");
}
name1()

//1. function declaration
function nam1(name){
    console.log("My name is", name);
}
nam1("Aravind")

function nam2(){
    let a = "Aravind"
    console.log("My name is",a);
}
nam2()

//2. function expression
const nam3 = function (travel,parlour,movie){
console.log("My total expenses for this month",(travel+parlour+movie));


}
nam3(1000,2000,4000)

//3. arrow function => fat arrow
const za = () => {
   console.log("Executed");
   let a = "Aravind"
   console.log("my name is",a);
   console.log("my name is ${a}");
}
za() 

//4. IIFE - Immediate Invoke Function
(function nam3() {
    console.log('executed');

})()