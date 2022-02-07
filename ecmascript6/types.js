// Types in JS
// 1. number
// 2. string
// 3. undefined
// 4. Date
// 5. object
// 6. null (object)

var x = 5;
var str = "Five";
var u; // no values are initialized.
var n = null; // doesn't point to any memory location.

const sum = (e)=> e+e;

// typeof operator tells type of data
console.log(typeof x);
console.log(typeof str);
console.log(typeof u);
console.log(typeof n);
console.log(typeof sum);

// Comparision operators
// == - checks value
// === - checks value and type
var x = 5; // number
var y = "5"; // string
console.log(x==y); // values match.
console.log(x===y); // type doesn't match.