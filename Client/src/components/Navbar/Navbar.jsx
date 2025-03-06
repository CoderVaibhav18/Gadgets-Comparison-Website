import {  useState } from "react";
import styles from "./Navbar.module.css";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 

  const handleBtn = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <section className={styles.navbar}>
        <div className={styles.left}>
          <h1>
            Deal<span>H</span>unt
          </h1>
        </div>
        <nav
          className={showMenu ? `${styles.menuMobile}` : `${styles.menuWeb}`}
        >
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="#Home">Home</Link>
            </li>
            <li className={styles.item}>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.icon}>
          <button className={styles.bar} onClick={handleBtn}>
            <HiBars3BottomLeft />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
