//Promise

//syntax
//return new promise((resolve,reject) =>{})

//promise - resolve

function go (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("I am going to the shop")
            
        }, 5000);
    })
}
function buy (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I am buying the product")
            
        }, 2000);
    })
}
function change (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Get the change")
            
        }, 2000);
    })
}
function back() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Return to home")
            
        }, 5000);
    })
    
}
go()
.then(val =>{console.log(val); return buy()})
.then(val =>{console.log(val); return change()})
.then(val => {console.log(val); return back()})
.then(val =>{console.log(val)})


//promise - reject - result logically wrong

function go (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const shop = true
            if(shop){
                resolve("I am going to the shop")
            }
            else{
                reject("I din't go to the shop")
            }
            
        }, 5000);
    })
}
function buy (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const product = false
            if(product){
                resolve("I am buying the product")
            }
            else{
                reject("I din't buy the product")
            }
            
        }, 2000);
    })
}
function change (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const change = true
            if(change){
                resolve("Get the change")
            }
            else{
                reject("I din't get the change")
            }
            
        }, 2000);
    })
}
function back() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const back = true
            if(back){
                resolve("Return to home")
            }
            else{
                reject("Din't reach home")
            }
            
        }, 5000);
    })
    
}
//go()
//.then(val =>{console.log(val); return buy()})
//.catch(val =>{console.log(val); return change()})
//.then(val => {console.log(val); return back()})
//.then(val =>{console.log(val)})

async function js() {
    try {
        const a = await go()
    console.log(a);
    const b = await buy()
    console.log(b);
    const c = await change()
    console.log(c);
    const d = await back()
    console.log(d); 
    } catch (error) {
        console.log(error);   
}
}
js()
