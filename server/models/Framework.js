const mongoose = require("mongoose");

const FrameworkSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  version: { type: String, required: true },
  description: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  githubUrl: { type: String, required: true },
  performanceScore: { type: Number, required: true },
  learningCurve: {
    type: String,
    enum: ["Easy", "Moderate", "Steep"],
    required: true,
  },
  communitySupport: { type: Number, required: true, min: 1, max: 5 },
  jobMarketDemand: { type: Number, required: true, min: 1, max: 5 },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Framework", FrameworkSchema);
