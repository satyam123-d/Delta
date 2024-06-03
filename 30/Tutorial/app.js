// require :- a built-in function to include external modules that exist in separate files.

const mathFunctions = require('./math');
const info = require('./fruits');

console.log(info);

// Use the imported functions
console.log(mathFunctions.sum(5, 3)); // Output: 8
console.log(mathFunctions.multiply(4, 6)); // Output: 24

// console.log("Hellow World")

// process : This object provides information about, and control over, the current Node.js process.

// process.argv : return an array containg the command-line argument passed when the Node.js process was launched

// let args = process.argv;

// for(let i=2; i<args.length; i++){
//     console.log("Hellow to,",args[i], i);
// }

