const fs = require("fs");

const print = ()=>{
    setTimeout(()=>{
        fs.writeFileSync("data.txt", "test");
    }, 10000)
    
}

print();