const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { MONGODB_URI } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));

mongoose.set("strictQuery", false); // Add this line to address the deprecation warning

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
