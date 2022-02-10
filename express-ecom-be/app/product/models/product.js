
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

// Step 3: Register Schema
const product = mongoose.model("Product", productSchema);

// Step 4: Export Schema
module.exports = product;