
// Step 1: Import Mongoose library

const mongoose = require("mongoose");

// Step 2: Define url;

const url = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/EcomDB?retryWrites=true&w=majority";

// Step 3: Connect

exports.connect = ()=>{
    mongoose.connect(url)
        .then(()=>{
            console.log("MongoDB connected using Mongoose.")
        },
        err=>{console.log(err)});
}