const express = require("express");
const { signin, signup, allUsers } = require("../controllers/user.controller");
const authorize = require("../middleware/auth");
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/all", authorize, allUsers);

module.exports = router;
