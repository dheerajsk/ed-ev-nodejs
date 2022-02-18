const process = require("child_process");

// process.spawn("node task.js");

const child_Process = process.exec("nohup node tas.js >/dev/null 2>&1 &", (err, out, stderr)=>{
    console.log(err);
    console.log(stderr);
    console.log(out)
})
console.log(child_Process.pid);

