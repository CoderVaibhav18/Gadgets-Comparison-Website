// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const morgan = require("morgan"); // For logging HTTP requests
const helmet = require("helmet"); // For enhancing security

const getProduct = require('./routes/productRoute');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Parses incoming JSON requests
app.use(helmet()); // Adds security headers
app.use(morgan("dev")); // Logs HTTP requests

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Server has started!...");
});

app.use("/api", getProduct);


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
