import React from "react";
import InputBar from "./UserInput/InputBar";
import Tab from "./TabAndInfo/Tab";

import styles from "./SecondCalc.module.css";

function SecondCalc() {
  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar />
        <Tab />
      </div>
    </div>
  );
}

export default SecondCalc;
