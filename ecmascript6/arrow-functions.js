// In JSON, Everything is a function

// 1. Regular Function Syntax
function sum(a, b){
    console.log(a+b);
}
// sum(2, 3);

function add(a, b){
    return a+b;
}
const result = add(4, 3);
console.log(result);

// 2. Arrow functions

const sumFun = (a, b)=>{console.log(a+b);}

sumFun(5, 5);

// Arrow Function has implicit return

const addFun = (a,b)=> a+b;
console.log(addFun(10, 12));
