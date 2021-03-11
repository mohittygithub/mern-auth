const mongoose = require('mongoose')
const Post = require('../models/posts')
const User = require('../models/users')

exports.newPost = async (req, res) => {
  try {
    const { title, body, tags, url } = req.body
    const user = req.params.user
    const userDetails = await User.findById({ _id: user })
    //console.log(user)
    const post = new Post({
      title,
      author: userDetails.name,
      body,
      tags,
      url,
      user,
    })
    const response = await post.save()
    res.json(response)
  } catch (error) {
    res.json({ error: error.message })
  }
}

exports.allPosts = async (req, res, next) => {
  try {
    const response = await Post.find()
    res.json({ response })
  } catch (error) {
    res.json({ error: error.message })
  }
}
