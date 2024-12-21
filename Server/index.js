// Load environment variables
require("dotenv").config();

// Import dependencies
const express = require("express");
const axios = require("axios");
const morgan = require("morgan"); // For logging HTTP requests
const helmet = require("helmet"); // For enhancing security

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Parses incoming JSON requests
app.use(helmet()); // Adds security headers
app.use(morgan("dev")); // Logs HTTP requests

// Routes

/**
 * @route GET /
 * @description Basic health check
 */
app.get("/", (req, res) => {
  res.status(200).send("Server has started!...");
});

/**
 * @route GET /api/products
 * @description Fetches products from the API based on a query
 * @query {string} k - The search keyword
 */
app.get("/api/products", async (req, res) => {
  const { k = "iphone 14" } = req.query;

  const options = {
    method: "GET",
    url: "https://real-time-product-search.p.rapidapi.com/search-v2",
    params: {
      q: k,
      country: "us",
      language: "en",
      page: "1",
      limit: "10",
      sort_by: "BEST_MATCH",
      product_condition: "ANY",
    },
    headers: {
      "x-rapidapi-key": process.env.PRODUCT_API_KEY,
      "x-rapidapi-host": process.env.PRODUCT_API_HOST,
    },
  };

  try {
    const { data } = await axios.request(options);
    res.status(200).json(data.data.products);
  } catch (error) {
    console.error("Error fetching products:", error.response?.data || error.message);
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.response?.data || error.message,
    });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
