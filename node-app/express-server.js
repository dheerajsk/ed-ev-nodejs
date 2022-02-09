
// Step 1: Import express
const express = require("express");

// Step 2: Create Server
const server = express();

// Step 3: Listen to clients
server.listen(3200);

// Step 4: Take requests

server.get("/", (req, res)=>{
    res.end("Hello, You are connected to express server");
});