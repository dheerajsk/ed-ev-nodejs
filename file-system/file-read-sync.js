
const fs = require("fs");

console.log("Task 1");

const data = fs.readFileSync("content.txt");
console.log(data.toString());

console.log("Task 3");