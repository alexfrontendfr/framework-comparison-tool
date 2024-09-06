const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGODB_URI } = require("./config");

const app = express();

app.use(
  cors({
    origin: "https://alexfrontendfr.github.io",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// API routes
app.use("/api/frameworks", require("./routes/frameworkRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
