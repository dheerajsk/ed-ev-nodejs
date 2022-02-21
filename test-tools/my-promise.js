

const promise = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("success")
        }, 1000);
    });
}

// after 1 sec, event queue [cbtimeout,2,1]


module.exports = promise;