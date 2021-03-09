const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator.isEmail, "Email is invalid"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
