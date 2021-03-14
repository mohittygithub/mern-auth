const express = require("express");
const router = express.Router();
const authorize = require("../middleware/auth");
const {
  newPost,
  allPosts,
  deletePost,
} = require("../controllers/post.controller");

router.post("/:user/new", authorize, newPost);
router.get("/all", authorize, allPosts);
router.delete("/delete/:postId", deletePost);

module.exports = router;
