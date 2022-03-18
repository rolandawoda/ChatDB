const express = require("express");

const jwt = require("../middlewares/jwt");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/login/:userId", jwt.encode, (req, res, next) => {
  return res.status(200).json({
    success: true,
    authorization: req.authToken,
  });
});

module.exports = router;
