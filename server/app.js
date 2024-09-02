const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const frameworkRoutes = require("./routes/frameworkRoutes");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// Middleware
app.use(
  cors({
    origin: "https://alexfrontendfr.github.io",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/frameworks", frameworkRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes (to be added later)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(Sentry.Handlers.errorHandler());

module.exports = app;
