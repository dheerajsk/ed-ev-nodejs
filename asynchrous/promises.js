

// 1. Create promise (ThirdParty)
const validateCard = ()=>{return new Promise((resolve, reject)=>{
    const x = 11;
    if(x%2==0){
        // Fullfilling the promise
        resolve("Validated");
        resolve("Validated 2");
        resolve("Validated 3");
    }else{
        // Rejectng a promise.
        reject("Invalid");
        resolve("valid");
    }
});}

// 2. Print after promise is completed
const deductPayment = (result)=>{
    console.log(result);
    console.log("Payment deducted");
}

const handleError = (err)=>{
    console.log("Error occurred: "+err);
}

validateCard().then(
    (result)=>{  deductPayment(result); },
    (reasonOfRejection)=>{handleError(reasonOfRejection);}
);


// function test(result){
//     console.log(result);
// }