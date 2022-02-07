// Rest & Spread operator (ES6)

// Rest Operator (...)
// Combines multiple values into an array

function add(a, b, c){
    console.log(a+b+c);
}

function sumArray(...arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum = arr[i]+sum;
    }
    console.log(sum);
}

sumArray(1);
sumArray(1, 2);
sumArray(1, 2, 3, 4);
sumArray(1, 2, 3, 4, 5);
sumArray(1, 2, 3, 4, 5, 6);

// Spread Operator (...)
// extracts individual values from array

function concatArry(){
    const cars = ["Audi", "BMW", "Honda"];
    const cars2 = ["MG", "Tesla", "Tata"];
    console.log(cars);
    console.log(cars2);
    console.log(...cars);
    console.log(...cars2);
    const result = [...cars, ...cars2];
    console.log(result);
}

concatArry();