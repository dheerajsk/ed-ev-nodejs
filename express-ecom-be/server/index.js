
// Step 1: Import express
const express = require("express");
const productRoutes = require("../app/product/routes/productRoutes");

// Step 2: Create Server
const server = express();

// Step 3: Listen to clients
server.listen(3200);

// Step 4: Routing redirections

// Forward all requests starting with /api/product to productRoutes.
server.use("/api/product", productRoutes);



// Step 5: Take requests

server.get("/", (req, res)=>{
    res.end("Hello, You are connected to express server");
});

console.log("Server is listening on 3200...");