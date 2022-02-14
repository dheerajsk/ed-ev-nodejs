
// Step 1: import mongoose.

const mongoose = require("mongoose");

// Step 2: Create Model/Schema

const productSchema = new mongoose.Schema({
    name:String,
    description: String,
    price: Number,
    image: String,
    sellerID: {type: mongoose.Types.ObjectId, ref: 'Seller'}
});

// Step 4: Export Schema
module.exports = productSchema;