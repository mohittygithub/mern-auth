const mongoose = require("mongoose");
const Post = require("../models/posts");

exports.newPost = async (req, res) => {
  try {
    const { title, author, authorEmail, text, url } = req.body;
    const user = req.params.user;
    const findUser = await User.findOne({ user });
    console.log(findUser);
    console.log(user);
    const post = new Post({ title, author, authorEmail, text, url, user });
    const response = await post.save();
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
};
