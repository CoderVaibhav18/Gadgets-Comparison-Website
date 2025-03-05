import { useState } from "react";
import styles from "./HeroSection.module.css";
import axios from "axios";
import ProductInfo from "../ProductInfo/ProductInfo";
import { ThreeDots } from "react-loader-spinner";

const HeroSection = () => {
  const [products, setProducts] = useState(null);
  const [formData, setFormData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle API fetch on button click
  const handleSearchClick = async (event) => {
    event.preventDefault(); // Prevent form submission behavior
    if (!formData.trim()) {
      setError("Please enter a search term."); // Show error if input is empty
      setProducts(null);
      return;
    }

    setLoading(true); // Start loading before the API call
    try {
      const response = await axios.get(
        `/api/products?k=${formData.split(" ").join("+")}`
      );
      setProducts(response.data); // Update products state with fetched data
      console.log(products);

      // setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again."); // Display error message
    } finally {
      setLoading(false); // Stop loading after the API call completes
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData(e.target.value); // Update formData state
    setError(null); // Clear error when user starts typing
  };

  return (
    <section className={styles.hero} id="Home">
      <h1 className="text-white">Find the Best Gadgets at the Best Prices</h1>
      <p className={styles.para}>
        Compare prices from multiple retailers and save money!
      </p>
      <div className={styles.searchContainer}>
        <p>Save big with exclusive offers from top retailers!</p>
        <div className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search for gadgets..."
            onChange={handleInputChange}
            className={styles.input}
            value={formData}
          />
          <button onClick={handleSearchClick} className='p-2 px-4'>Search</button>
        </div>
      </div>
      <div>
        {error && (
          <p style={{ color: "red", fontSize: ".9rem", margin: "10px 0" }}>
            {error}
          </p>
        )}
        {loading && (
          <div className={styles.loader}>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="red"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {!loading && products && (
          <ProductInfo products={products} formData={formData} />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
