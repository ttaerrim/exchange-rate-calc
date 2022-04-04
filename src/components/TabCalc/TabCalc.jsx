import React from "react";
import InputBar from "./UserInput/InputBar";
import Tab from "./TabAndInfo/Tab";

import styles from "./TabCalc.module.css";

function TabCalc() {
  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar />
        <Tab />
      </div>
    </div>
  );
}

export default TabCalc;
