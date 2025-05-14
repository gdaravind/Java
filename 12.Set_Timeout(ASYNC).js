//setTimeout - Asynchronous - output based on time

function box1 (){
    setTimeout(() => {
        console.log("successful");
        
    }, 5000);                     //5000 millisec - 5 sec
}
function box2 (){
    setTimeout(() => {
        console.log("loading");
        
    }, 2000);
}
function box3 (){
    setTimeout(() => {
        console.log("complete");
        
    }, 3000);
}
box1()
box2()
box3()
