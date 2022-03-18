const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

//Auth Routes
router
  .post("/login", authController.login)
  .post("/signup", authController.signnup);

module.exports = router;
