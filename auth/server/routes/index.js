const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");
require("dotenv").config();
const secret = process.env.SECRET;
const auth = jwt({
  secret: secret,
  userProperty: "payload"
});

var profileCtrl = require("../controllers/profile");
var authCtrl = require("../controllers/authentication");

router.get("/profile", auth, profileCtrl.profileRead);

router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

module.exports = router;