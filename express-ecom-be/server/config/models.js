
const productSchema = require("../../app/product/models/product");
const sellerSchema = require("../../app/seller/models/seller");

const mongoose = require("mongoose");

const product = mongoose.model("Product", productSchema);
const seller = mongoose.model("Seller", sellerSchema);

module.exports = {product, seller};