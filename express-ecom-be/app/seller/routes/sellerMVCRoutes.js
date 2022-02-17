
const express = require("express");
const controller = require("../mvcControllers/sellerController");
const authController = require("../mvcControllers/sellerAuthController");
const router = express.Router();
const sessionCheck = require("../../../server/middlewares/session-check");

// seller/login
router.get("/logout", sessionCheck, authController.logout)
router.get("/login", authController.getLoginView);
router.post("/login", authController.login);

// Products routes
router.get("/product/new", sessionCheck, controller.getAddView);
router.get("/product/", sessionCheck, controller.getAll);
router.get("/product/:id", sessionCheck, controller.get);
router.post("/product/new", sessionCheck, controller.add);
router.post("/product/update", sessionCheck, controller.update);

module.exports = router;