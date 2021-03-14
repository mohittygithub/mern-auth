const mongoose = require("mongoose");
const { findById } = require("../models/posts");
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

// get post by id
exports.getPost = async (req, res, next) => {
  const id = req.params.id;
  console.log("id", id);
  try {
    const response = await Post.findById({ _id: id });
    res.json({ response });
  } catch (error) {
    res.json(error.message);
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

// update post controller
exports.updatePost = async (req, res, next) => {
  const postId = req.params.id;
  const { title, body, tags } = req.body;
  try {
    const response = await Post.findByIdAndUpdate(postId, {
      title,
      body,
      tags,
    });
    if (!response) return res.json({ error: "Post does not exist" });
    res.json({ response });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// delete post controller
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const response = await Post.findByIdAndRemove({ _id: postId });
    res.json({ response });
  } catch (error) {
    res.json({ error: error.message });
  }
};
