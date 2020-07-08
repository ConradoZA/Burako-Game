 
const router = require("express").Router();
const UserController = require("../controllers/UserController.js");

router.post("/new", UserController.newUser);

module.exports = router;
