// const - a type where value can't be changed.
// var - Function level scoped
// let - Block level scoped


function sumArray(...arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum = arr[i]+sum;
    }
    // console.log(i);
    console.log(sum);
}


// sumArray(1);
// sumArray(1, 2);
// sumArray(1, 2, 3, 4);
// sumArray(1, 2, 3, 4, 5);
sumArray(1, 2, 3, 4, 5, 6);

function constCheck(){
    const x = 10;
    // x = 20;
    console.log(x);
}

constCheck();