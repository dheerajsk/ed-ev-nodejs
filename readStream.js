const fs = require("fs");
const { Stream } = require("stream");


const stream = fs.createReadStream("data.txt", {
    highWaterMark: 1024*5
});

var i=0;

stream.on("data", (chunk)=>{
    console.log("\nNew chunk"+i);
    i++;
});

stream.on("end", ()=>{
    console.log("Reading done");
}
)