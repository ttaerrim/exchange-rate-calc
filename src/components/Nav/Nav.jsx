import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/">Calc #1</Link>
        </li>
        <li>
          <Link to="/tab">Calc #2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
