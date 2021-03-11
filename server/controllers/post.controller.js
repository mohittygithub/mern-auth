const mongoose = require("mongoose");
const Post = require("../models/posts");

exports.newPost = async (req, res) => {
  try {
    const { title, author, authorEmail, text, tags, url } = req.body;
    const user = req.params.user;
    console.log(user);
    const post = new Post({
      title,
      author,
      authorEmail,
      text,
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
