const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const { schema } = require("./users");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorEmail: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid email"],
    },
    text: {
      type: String,
    },
    url: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  { timestamps: true }
);
postSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Post", postSchema);
