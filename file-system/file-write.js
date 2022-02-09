
const fs = require("fs");

const obj = {
    name: "Jon H.",
    age: 50,
    dept: "Administration"
};

fs.writeFile("content.txt", JSON.stringify(obj), (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data is written");
    }
});

console.log("Next Task");