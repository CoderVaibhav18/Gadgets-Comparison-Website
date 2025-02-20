const { Router } = require("express");
const { products } = require("../controllers/productController");
const router = Router();

router.get("/products", products);

module.exports = router;
