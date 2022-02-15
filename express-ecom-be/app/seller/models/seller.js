
// Step 1: import mongoose.

const mongoose = require("mongoose");

// Step 2: Create Model/Schema

const sellerSchema = new mongoose.Schema({
    name:String,
    username: String,
    password: String
});

// Step 4: Export Schema
module.exports = sellerSchema;