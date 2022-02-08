
const promise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(100), 1000);
    })
}

promise().then(
    (data)=>{
        console.log("Data is "+data);
        return data*10;
    },
    (err)=>{return err;}
).then(
    (secondData)=>{
        console.log("Data is "+secondData);
        return secondData*10;
    },
    (err)=>{
        return err;
    }
).then(
    (thirdData)=>{
        console.log("Data is "+thirdData);
    }
).catch(
    (err)=>{console.log(err)}
).finally(
    ()=>{
        console.log("Promise completed");
    }
)
