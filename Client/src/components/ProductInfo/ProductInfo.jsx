import PropTypes from "prop-types";
import styles from "./ProductInfo.module.css";
import ProductCart from "../ProductCart/ProductCart";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductInfo = ({ flipkartProduct, formData }) => {
  
  const [amazon, setAmazon] = useState([]);
  const [jioMart, setJioMart] = useState([])

  useEffect(() => {
    const fetchAmazon = async () => {
      // Validate formData before making the API call
      if (!formData || typeof formData !== "string") {
        console.error("Invalid formData");
        return;
      }

      try {
        const response = await axios.get(`/api/amazon?search=${encodeURIComponent(formData)}`);
        if (Array.isArray(response.data)) {
          setAmazon(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchJiomart = async () => {
      console.log("fething started");
       // Validate formData before making the API call
       if (!formData || typeof formData !== "string") {
        console.error("Invalid formData");
        return;
      }

      try {
        const response = await axios.get(`/api/jiomart?search=${encodeURIComponent(formData)}`);
        if (Array.isArray(response.data)) {
          setJioMart(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchAmazon();
    fetchJiomart()
  }, [formData]);

  return (
    <section className={styles.container}>
      {/* Flipkart Card */}
      {flipkartProduct && flipkartProduct.length > 0 && (
        <ProductCart ProductDetails={flipkartProduct} title="Flipkart" />
      )}

      {/* Amazon Card */}
      {amazon && amazon.length > 0 && (
        <ProductCart ProductDetails={amazon} title="Amazon" />
      )}

      {/* Jiomart Card */}
      {jioMart && jioMart.length > 0 && (
        <ProductCart ProductDetails={jioMart} title="JioMart" />
      )}

    </section>
  );
};

ProductInfo.propTypes = {
  flipkartProduct: PropTypes.arrayOf(
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
