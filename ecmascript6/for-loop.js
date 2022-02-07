// Es6 - For loop

function sumArray(...arr){
    let sum=0;
    for(let num of arr){
        sum = sum+num;
    }
    // arr.forEach(a=>{sum = sum+a});
    console.log(sum);
}

sumArray(1);
sumArray(1, 2);
sumArray(1, 2, 3, 4);
sumArray(1, 2, 3, 4, 5);
sumArray(1, 2, 3, 4, 5, 6);