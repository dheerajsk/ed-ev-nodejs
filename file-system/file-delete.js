
const fs = require("fs");

fs.unlink("content.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File deleted");
    }
})