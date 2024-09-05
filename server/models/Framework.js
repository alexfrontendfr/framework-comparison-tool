// server/models/Framework.js
const mongoose = require("mongoose");

const FrameworkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  performanceScore: { type: Number, required: true },
  popularity: { type: Number, required: true },
  ecosystemScore: { type: Number, required: true },
  description: { type: String, required: true },
  pros: [{ type: String }],
  cons: [{ type: String }],
});

module.exports = mongoose.model("Framework", FrameworkSchema);
