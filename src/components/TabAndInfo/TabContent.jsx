import React from "react";
import styles from "./TabContent.module.css";

function TabContent(props) {
  return (
    <div className={styles.contentBox}>
      <h2>{props.onSave}</h2>
      <h4>기준일 :</h4>
      <h4>2022-Jan-01</h4>
    </div>
  );
}

export default TabContent;
