// import React from 'react'
import PropTypes from "prop-types";
import styles from "./productCart.module.css"


const ProductCart = ({ProductDetails, title}) => {
  return (
    <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={ProductDetails[0].image || "https://via.placeholder.com/125"}
              alt="Flipkart Product"
              height="125"
            />
          </div>
          <div className={styles.category}>{title}</div>
          <div className={styles.heading}>
            {ProductDetails[0].productName || "No Product Name"}
            <p>{ProductDetails[0].price || "Price not available"}</p>
            <div className={styles.author}>
              <a href={ProductDetails[0].link || "#"} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
        </div>
  )
}
ProductCart.propTypes = {
  title: PropTypes.string,
  ProductDetails: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      productName: PropTypes.string,
      price: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
  // formData: PropTypes.string.isRequired,
};

export default ProductCart
