//String methods

// length       : Returns the length of the string.
// toUpperCase(): Converts the entire string to uppercase.
// toLowerCase(): Converts the entire string to lowercase.
// charAt(index): Returns the character at the specified index.
// indexOf      : Returns the index of the first occurrence of the specified substring.
// lastIndexof  : Returns the index of the last occurrence of the specified substring.
// slice()      : Extracts a section of the string (similar to substring)
// substring    : It use to gr a particle value in the string value
// replace()    : Replaces the specified value with a new value.
// replaceA11   : It use to replace all the words in the given para
// trim()       : Removes whitespace from both ends of the string.
// split()      : Splits the string into an array of substring
// join()       : it is use to joining the words
// concat()     : Joins two or more strings
// startsWith() : string starts with the specified substring.
// endsWith()   : Checks if the string ends with the specified substring.
// includes()   : Checks if the string contains the specified substring.


let a = "Welcome to java"
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.charAt(5));
console.log(a.indexOf("a"));
console.log(a.lastIndexOf("a"));
console.log(a.slice(5));
console.log(a.slice(-5));
console.log(a.substring(0,5));
console.log(a.replace("java","js"));
console.log(a.replaceAll("j", "J"));
console.log(a.trim());
console.log(a.split("").join(""));
console.log(a.concat("script"));
console.log(a.startsWith("a"));
console.log(a.endsWith("a"));
console.log(a.includes("to"));
console.log(a.repeat("2"));