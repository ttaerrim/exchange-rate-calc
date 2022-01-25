import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <a href="/">Calc #1</a>
        </li>
        <li>
          <a href="/second">Calc #2</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
