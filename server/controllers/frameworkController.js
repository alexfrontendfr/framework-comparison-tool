// server/controllers/frameworkController.js
const Framework = require("../models/Framework");
const Rating = require("../models/Rating");

exports.getAllFrameworks = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = { name: { $regex: search, $options: "i" } };
    }

    const frameworks = await Framework.find(query).select(
      "name version performanceScore popularity ecosystemScore"
    );
    res.json(frameworks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching frameworks", error: error.message });
  }
};

exports.getFrameworkById = async (req, res) => {
  try {
    const framework = await Framework.findById(req.params.id);
    if (!framework) {
      return res.status(404).json({ message: "Framework not found" });
    }
    res.json(framework);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching framework", error: error.message });
  }
};

exports.createFramework = async (req, res) => {
  try {
    const newFramework = new Framework(req.body);
    const savedFramework = await newFramework.save();
    res.status(201).json(savedFramework);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating framework", error: error.message });
  }
};

exports.updateFramework = async (req, res) => {
  try {
    const updatedFramework = await Framework.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFramework) {
      return res.status(404).json({ message: "Framework not found" });
    }
    res.json(updatedFramework);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating framework", error: error.message });
  }
};

exports.deleteFramework = async (req, res) => {
  try {
    const deletedFramework = await Framework.findByIdAndDelete(req.params.id);
    if (!deletedFramework) {
      return res.status(404).json({ message: "Framework not found" });
    }
    res.json({ message: "Framework deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting framework", error: error.message });
  }
};

exports.addRating = async (req, res) => {
  try {
    const { frameworkId } = req.params;
    const { user, score, comment } = req.body;

    const framework = await Framework.findById(frameworkId);
    if (!framework) {
      return res.status(404).json({ message: "Framework not found" });
    }

    const rating = new Rating({
      framework: frameworkId,
      user,
      score,
      comment,
    });

    await rating.save();

    // Update the framework's average rating
    const ratings = await Rating.find({ framework: frameworkId });
    const avgRating =
      ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length;
    framework.userRating = avgRating;
    await framework.save();

    res.status(201).json(rating);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error adding rating", error: error.message });
  }
};

exports.getFrameworkRatings = async (req, res) => {
  try {
    const { frameworkId } = req.params;
    const ratings = await Rating.find({ framework: frameworkId }).sort(
      "-createdAt"
    );
    res.json(ratings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching ratings", error: error.message });
  }
};
