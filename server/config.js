require("dotenv").config({ path: "../env" });

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
};
