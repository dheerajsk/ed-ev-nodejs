
const express = require("express");
const controller = require("../mvcControllers/sellerController");
const authController = require("../mvcControllers/sellerAuthController");
const router = express.Router();

// seller/login
router.get("/login", authController.getLoginView);
router.post("/login", authController.login);

// Products routes
router.get("/product/new", controller.getAddView);
router.get("/product/", controller.getAll);
router.get("/product/:id", controller.get);
router.post("/product/new", controller.add);
router.post("/product/update", controller.update);

module.exports = router;