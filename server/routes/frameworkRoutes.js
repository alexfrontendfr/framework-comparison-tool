// server/routes/frameworkRoutes.js
const express = require("express");
const router = express.Router();
const Framework = require("../models/Framework");

// GET all frameworks
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = { name: { $regex: search, $options: "i" } };
    }

    const frameworks = await Framework.find(query);
    res.json(frameworks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one framework
router.get("/:id", getFramework, (req, res) => {
  res.json(res.framework);
});

// POST a new framework
router.post("/", async (req, res) => {
  const framework = new Framework(req.body);
  try {
    const newFramework = await framework.save();
    res.status(201).json(newFramework);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a specific framework
async function getFramework(req, res, next) {
  try {
    const framework = await Framework.findById(req.params.id);
    if (framework == null) {
      return res.status(404).json({ message: "Framework not found" });
    }
    res.framework = framework;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
