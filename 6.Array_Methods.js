//An array in JavaScript is a special type of object used to store multiple values in a single variable.
//It can hold a collection of elements, which can be of any data type Arrays are useful for storing lists of data.

//Methods
//1. push(): adds a new element to the end of the array

let a = [10,20,30,40,50]
a.push("etc")
console.log(a);


//2. pop(): Removes the last element from the array.

let b = [10,20,30]
b.pop()
console.log(b);


//3. shift(): Removes the first element from the array.

let c= [10,20,30,40]
c.shift()
console.log(c);


//4. unshift(): Adds a new element to the beginning of the array.

let d = [10,20,30,40]
d.unshift(5)
console.log(d);


//5. splice(): Adds or removes elements from the array.
//   splice(ado, remove , replace)

//syntax
//variable name.splice(index,splice,value)

//splice number
//0 - it is used to add the value in the given index space
//1 - it is used to replace the given index space

let days = ["sun","mon","tues","thur","thur","fri","sat"]
days.splice(3,0,"wed")
console.log(days);

let dayss = ["sun","mon","tues","thur","thur","fri","sat"]
dayss.splice(3,1,"wed")
console.log(dayss);


//6. sort(): Sorts the elements of the array.

let ab = ["mango","apple","orange","banana","kiwi"]
console.log(ab.sort());


//7. reverse : Reverses the order of elements in the array.

let bb = "Anu"
console.log(bb.split("").reverse().join(""));