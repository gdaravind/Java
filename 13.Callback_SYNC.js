//callback - Synchronous - output based on given order - 2 func

function walk(callback) {
   setTimeout(() => {
    console.log("Walk the dog");
    callback()  //because another func is waiting to be executed
   }, 5000);
}
function clean(callback){
    setTimeout(() => {
        console.log("Clean the kitchen");
        callback()
    }, 2000);
}
//walk(clean);

//callbackhell - multiple func
function trash(callback){
    setTimeout(() => {
        console.log("Take the trash out");
        callback()
    }, 500);
}
function work(callback){
    setTimeout(() => {
        console.log("Task completed");
    
    }, 5000);
}
walk(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{})
        })
    })
})
