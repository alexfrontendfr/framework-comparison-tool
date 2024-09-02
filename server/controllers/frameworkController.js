const Framework = require("../models/Framework");

exports.getAllFrameworks = async (req, res) => {
  try {
    const frameworks = await Framework.find().select(
      "name version performanceScore"
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
