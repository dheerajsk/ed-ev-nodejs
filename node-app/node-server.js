// RAW NodeJS code (Vanilla NodeJS code).

// Step 1: Import http module.

const http = require("http");
// http is part of node core modules.

// Step 2: Create http server using nodejs.

const server = http.createServer((req, res)=>{
    res.end("Hello, you are connected to nodejs server");
});

// Step 3: Listening for requests from client.
server.listen(3200);

console.log("Server is listening on 3200");