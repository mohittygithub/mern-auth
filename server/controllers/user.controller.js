const mongoose = require("mongoose");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authorize = require("../middleware/auth");

// signin controller
exports.signin = async (req, res, next) => {
  try {
    const email = req.body.email;
    console.log(req.body);
    const user = await User.findOne({ email: email });

    // checking if email is stored in DB
    if (!user) res.json({ error: "Error while logging in" });

    // comparing the passwords
    const comparePasswords = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!comparePasswords) res.json({ error: "Incorrect credentials" });

    // generating jwt
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ success: true, jwt: token });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

// signup controller
exports.signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword)
      return res.json({ error: "Passwords mismatch" });
    const isUserExists = await User.findOne({ email: email });
    if (isUserExists) return res.json({ error: "Email already exists" });

    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    const createdUser = await user.save();

    res.status(201).json({
      success: true,
      message: "Account created successfully.",
      results: {
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// get all users
exports.allUsers = (req, res, next) => {
  User.find((error, response) => {
    if (error) res.next(error);
    else res.status(200).json(response);
  });
};
