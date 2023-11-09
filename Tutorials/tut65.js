// synchronous or blocking
// ---line-by-line execution

// Asynchronous or non blocking 
// ---line-by-line execution not guarantedd
// ---call backs will be fired 

a = function sum(err,data){
    console.log("This is Inside Function ", err , data);
}
const fs = require("fs");
fs.readFile("tut.txt" , "utf-8" , a);
// console.log(text);
console.log("This is a message")