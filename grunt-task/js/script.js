
// Step 1: Import express
const express = require("express");
const productRoutes = require("../app/product/routes/productRoutes");
const productMVCRoutes = require("../app/product/routes/productMVCRoutes");
const sellerMVCRoutes = require("../app/seller/routes/sellerMVCRoutes");
const path=require("path");
const errorHandler = require("../server/middlewares/error-handler");

const sellerRoutes = require("../app/seller/routes/seller");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
const session = require("express-session");

// Step 2: Create Server
const server = express();

// Connect to MongoDB

mongodb.connect();


// Step 3: Listen to clients
server.listen(3200);

// Configure session
server.use(session({
    secret:"This is a secret",
    cookie:{maxAge: 300000},
    saveUninitialized:false
}));

// View engine configuration.
server.set("view engine", "ejs");
server.set("views", [path.join(__dirname, '../app/product/views'), path.join(__dirname, '../app/seller/views')]);

// Middleware for bodyParser
// parsing json data
server.use(bodyParser.json());
// parsing form data
server.use(bodyParser.urlencoded({extended: false}));

// Step 4: Routing redirections

// Forward all requests starting with /api/product to productRoutes.
server.use("/api/product", productRoutes);
server.use("/api/seller", sellerRoutes);
// Forward MVC Requests.
// localhost:3200/product

server.use("/product", productMVCRoutes);
server.use("/seller", sellerMVCRoutes);

// Step 5: Take requests

server.use(errorHandler);

server.get("/", (req, res)=>{
    res.end("Hello, You are connected to express server");
});

console.log("Server is listening on 3200...");