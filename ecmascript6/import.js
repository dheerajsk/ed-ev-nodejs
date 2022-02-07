
// Importing export module
// import * as sum from "./export";
const exports = require("./export");

function print(){
    const result = exports.add(4, 5);
    console.log(result);
}

print();