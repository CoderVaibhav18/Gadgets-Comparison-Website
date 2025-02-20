const { default: axios } = require("axios");

const products = async (req, res) => {
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
    console.error(
      "Error fetching products:",
      error.response?.data || error.message
    );
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.response?.data || error.message,
    });
  }
};
module.exports = { products };
