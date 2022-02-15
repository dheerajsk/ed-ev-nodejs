const express = require("express");
const controller = require("../controllers/sellerController");

const router = express.Router();

// api/seller/login
router.post("/login", controller.login);

module.exports = router;