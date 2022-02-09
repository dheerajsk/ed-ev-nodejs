
const fs = require("fs");

const data = {
    name:"David J.",
    age:"65",
    dept: "Finance"
};

// objects are hash tables - insertion, deletion and updation O(1)

fs.appendFile("content.txt", JSON.stringify(data), (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data Updated");
    }
})