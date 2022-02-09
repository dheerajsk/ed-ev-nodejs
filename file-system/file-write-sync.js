

const fs = require("fs");

const obj = {
    name: "Jon H",
    age: 60,
    dept: "Administration"
};

fs.writeFileSync("content.txt", JSON.stringify(obj));

console.log("Next Task");