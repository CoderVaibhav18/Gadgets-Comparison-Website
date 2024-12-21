import PropTypes from "prop-types";
import styles from "./ProductInfo.module.css";
import ProductCart from "../ProductCart/ProductCart";
// import { useEffect } from "react";
// import axios from "axios";

const ProductInfo = ({ products, formData }) => {
  console.log(formData);
  console.log(products);

  return (
    <section className={styles.container}>
      {/* Flipkart Card */}
      {products && products.length > 0 && (
        <ProductCart ProductDetails={products} />
      )}
    </section>
  );
};

ProductInfo.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      productName: PropTypes.string,
      price: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
  formData: PropTypes.string.isRequired,
};

export default ProductInfo;
