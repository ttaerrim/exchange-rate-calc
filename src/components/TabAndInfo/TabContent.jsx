import React from "react";
import styles from "./TabContent.module.css";

function TabContent() {
  return (
    <div className={styles.contentBox}>
      <h2>CAD</h2>
      <h4>기준일 :</h4>
      <h4>2022-Jan-01</h4>
    </div>
  );
}

export default TabContent;
