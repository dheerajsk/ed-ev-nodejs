// Read a file and then print content
// IO - Asynchronously.

// 1. Importing fs(File System) library
const fs = require("fs");

console.log("Task 1");
console.log("Task 2");

// function will be executed later by event queue after data is read.
// 3. Print the content
const print = (err, content)=>{
    if(err){
        console.log(err);
    }else{
        console.log(content.toString());
    }
}

// 2. Read the file.
// passing callback function
// callback - function as a parameter.
fs.readFile("content.txt", print);

console.log("Task 3");


console.log("Task 4");

// Task1
// Task2
// Task3
// Task4
// Content
