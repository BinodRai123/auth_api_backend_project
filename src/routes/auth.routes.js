const express = require("express");
const {registerController} = require("../controllers/auth.controllers");

const router = express.Router();


router.post("/register",registerController)


module.exports = router;