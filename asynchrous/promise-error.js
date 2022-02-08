

// 1. Create promise (ThirdParty)
const validateCard = ()=>{return new Promise((resolve, reject)=>{
    const x = 10;
    throw new Error("Promise error");
    if(x%2==0){
        // Fullfilling the promise
        resolve(Promise.reject("error while resolving"));
    }else{
        // Rejectng a promise.
        reject("Invalid");
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
    (result)=>{
        deductPayment(result); },
    (reasonOfRejection)=>{
        console.log("error in then block");
        handleError(reasonOfRejection);}
).catch(err=>{
    console.log("Error caught in catch block");
});


// function test(result){
//     console.log(result);
// }