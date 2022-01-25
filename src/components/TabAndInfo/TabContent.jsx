import React from "react";
import { useSelector } from "react-redux";

import styles from "./TabContent.module.css";

function TabContent(props) {
  const activatedTab = useSelector((state) => state.tab.activatedTab);

  return (
    <div className={styles.contentBox}>
      <h2>{activatedTab}</h2>
      <h4>기준일 :</h4>
      <h4>2022-Jan-01</h4>
    </div>
  );
}

export default TabContent;
