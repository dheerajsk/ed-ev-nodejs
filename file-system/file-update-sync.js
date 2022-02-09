
const fs = require("fs");

const data = {
    name:"Pat J.",
    age:"55",
    dept: "DevOPS"
};

fs.appendFileSync("content.txt", JSON.stringify(data));

console.log("Data is appended");