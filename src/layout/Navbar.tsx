import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>LEULARIA</h1>
      <ul className={styles.navbar_items}>
        <li className={styles.current_page}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">AboutMe</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
