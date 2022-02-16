const express = require("express");
const controller = require("../mvcControllers/productController");

const router = express.Router();

router.get("/", controller.getAll);

module.exports = router;