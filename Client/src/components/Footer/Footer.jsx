// import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} w-screen`}>
      <div className={styles.left}>
        <h1>
          Deal<span>H</span>unt
        </h1>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p className={styles.copyright}>
            &copy;2024 DealHunt. All rights reserved.
          </p>
          <p className={styles.para}>Made with ❤️ by Vaibhav Sathe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
