const process = require("child_process");

// process.spawn("node task.js");

const child_Process = process.exec("nohup node task.js >/dev/null 2>&1 &")
console.log(child_Process.pid);

