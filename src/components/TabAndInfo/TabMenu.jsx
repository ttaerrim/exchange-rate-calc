import React from "react";
import styles from "./TabMenu.module.css";

function TabMenu() {
  return (
    <div className={styles.tabMenu}>
      <button>CAD</button>
      <button>KRW</button>
      <button>HKD</button>
      <button>JPY</button>
      <button>CNY</button>
    </div>
  );
}

export default TabMenu;
