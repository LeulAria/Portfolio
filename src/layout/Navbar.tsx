import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>LEULARIA</h1>
    <ul className={styles.navbar_items}>
      <li className={styles.current_page}>
        <a>Home</a>
      </li>
      <li>
        <a>AboutMe</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
