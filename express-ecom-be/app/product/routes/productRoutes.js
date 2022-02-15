
// Step 1: Import express.
const express = require("express");
const controller = require("../controllers/productController");
const auth = require("../../../server/middlewares/auth");

// Step 2: Create router.

const router = express.Router();

// Configure all routings for product.
// api/product/1
router.delete("/:id", auth, controller.delete);
// api/product/
router.put("/", auth, controller.update);
// api/product
router.post("/", auth, controller.add);
// api/product/seller/:id
router.get("/seller/:id", controller.getBySellerID);
// api/product/1
router.get("/:id", controller.get);
// api/product
router.get("/", controller.getAll);


module.exports = router;