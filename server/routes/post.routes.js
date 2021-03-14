const express = require("express");
const router = express.Router();
const authorize = require("../middleware/auth");
const {
  newPost,
  allPosts,
  deletePost,
  updatePost,
  getPost,
} = require("../controllers/post.controller");

router.post("/:user/new", authorize, newPost);
router.get("/all", authorize, allPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
