const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const axios = require("axios");
const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.send("Server has started!...");
});

app.get("/api/products", async (req, res) => {
  const { k } = req.query;
  console.log(k);

  const options = {
    method: "GET",
    url: "https://real-time-product-search.p.rapidapi.com/search-v2",
    params: {
      q: k || "iphone 14",
      country: "us",
      language: "en",
      page: "1",
      limit: "10",
      sort_by: "BEST_MATCH",
      product_condition: "ANY",
    },
    headers: {
      "x-rapidapi-key": process.env.PRODUCT_API_KEY, // Replace with your actual key
      "x-rapidapi-host": process.env.PRODUCT_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    // console.log("Product Data:", response.data.data.products);
    res.json(response.data.data.products);
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
  }
});

app.get("/api/flipkart", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/seller-products",
    params: {
      product_title: "iphone 14",
      seller_id: "A02211013Q5HP3OMSZC7W",
      country: "IN",
      page: "1",
      sort_by: "RELEVANCE",
    },
    headers: {
      "x-rapidapi-key": "a244fd19b8mshfec96f7cc65658ep13d980jsn79437390dcc5",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    // console.error(error);
    res.json(error);
  }
});

app.listen(port, () =>
  console.log(`Server running at port http://localhost:${port}`)
);
