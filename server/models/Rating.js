// server/models/Rating.js
const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  framework: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Framework",
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rating", RatingSchema);
