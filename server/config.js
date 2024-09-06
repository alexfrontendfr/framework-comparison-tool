require("dotenv").config({ path: "../.env" });

module.exports = {
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/framework_comparison_db",
};
