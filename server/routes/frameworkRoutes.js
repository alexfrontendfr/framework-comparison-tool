const express = require("express");
const router = express.Router();
const frameworkController = require("../controllers/frameworkController");

router.get("/", frameworkController.getAllFrameworks);
router.get("/:id", frameworkController.getFrameworkById);
router.post("/", frameworkController.createFramework);
router.put("/:id", frameworkController.updateFramework);
router.delete("/:id", frameworkController.deleteFramework);

module.exports = router;
