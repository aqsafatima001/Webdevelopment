const fs = require("fs");
let text = fs.readFileSync("tut.txt" , "utf-8");
text = text.replace("Aqsa" , "Rohan");

console.log("The content of the file is:");
console.log(text);

console.log("Creating a new File....");
fs.writeFileSync("rohan.txt" , text);