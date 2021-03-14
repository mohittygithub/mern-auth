const mongoose = require("mongoose");
const Post = require("../models/posts");
const User = require("../models/users");

// create new post controller
exports.newPost = async (req, res) => {
  try {
    console.log("hi");
    const { title, body, tags, url } = req.body;
    const user = req.params.user;
    const userDetails = await User.findById({ _id: user });
    //console.log(user)
    const post = new Post({
      title,
      author: userDetails.name,
      body,
      tags,
      url,
      user,
    });
    const response = await post.save();
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// get all posts controller
exports.allPosts = async (req, res, next) => {
  try {
    const response = await Post.find();
    res.json({ response });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// delete post controller
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.postId;

    const response = await Post.findByIdAndRemove({ _id: postId });
    res.json({ response });
  } catch (error) {
    res.json({ error: error.message });
  }
};
