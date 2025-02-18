import PropTypes from "prop-types";
import styles from "./productCart.module.css";

// Utility function to convert dollar to INR
const convertDollarToINR = (dollarPrice, conversionRate = 83) => {
  // Parse dollar price to extract the numeric value
  const numericPrice = parseFloat(dollarPrice.replace(/[^0-9.]/g, ""));
  
  // Convert to INR
  const inrPrice = numericPrice * conversionRate;
  
  // Format INR value
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(inrPrice);
};

const ProductCart = ({ ProductDetails }) => {
  return (
    <>
      {ProductDetails.map((el, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={el.product_photos[0] || "https://via.placeholder.com/125"}
              alt={el.product_title || "Product"}
              height="120"
              width="135"
            />
          </div>
          <div className={styles.category}>{el.offer.store_name}</div>
          <div className={styles.heading}>
            {el.product_title || "No Product Name"}
            <p>
              {el.offer.price
                ? convertDollarToINR(el.offer.price)
                : "Price not available"}
            </p>
            <div className={styles.author}>
              <a
                href={el.offer.offer_page_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCart.propTypes = {
  ProductDetails: PropTypes.arrayOf(
    PropTypes.shape({
      product_photos: PropTypes.arrayOf(PropTypes.string), // Array of image URLs
      product_title: PropTypes.string, // Product title
      link: PropTypes.string, // Product link
      offer: PropTypes.shape({
        store_name: PropTypes.string, // Store name
        price: PropTypes.string, // Product price in USD
      }).isRequired, // Offer object is required
    })
  ).isRequired,
};

export default ProductCart;
