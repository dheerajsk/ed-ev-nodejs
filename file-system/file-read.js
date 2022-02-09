
// Import fs(file system) module.
// - Core Modules/Libraries
// - External Modules/Libraries
// - NPM(Node Package Manager)
// Package Manager - bring and maintain packages in your applications.

const fs = require("fs");

fs.readFile("content.txt", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

console.log("Task 2");