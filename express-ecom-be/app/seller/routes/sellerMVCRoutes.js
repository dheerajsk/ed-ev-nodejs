
const express = require("express");
const controller = require("../mvcControllers/sellerController");

const router = express.Router();

router.get("/product/", controller.getAll);
router.get("/product/:id", controller.get);
router.post("/product/update", controller.update);

module.exports = router;