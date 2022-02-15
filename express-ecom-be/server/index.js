
// Step 1: Import express
const express = require("express");
const productRoutes = require("../app/product/routes/productRoutes");
const sellerRoutes = require("../app/seller/routes/seller");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");

// Step 2: Create Server
const server = express();

// Connect to MongoDB

mongodb.connect();


// Step 3: Listen to clients
server.listen(3200);

// Middleware for bodyParser
server.use(bodyParser.json());

// Step 4: Routing redirections

// Forward all requests starting with /api/product to productRoutes.
server.use("/api/product", productRoutes);
server.use("/api/seller", sellerRoutes);


// Step 5: Take requests

server.get("/", (req, res)=>{
    res.end("Hello, You are connected to express server");
});

console.log("Server is listening on 3200...");