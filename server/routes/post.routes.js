const express = require("express");
const router = express.Router();
const { newPost } = require("../controllers/post.controller");

router.post("/:user", newPost);

module.exports = router;
