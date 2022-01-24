import React, { useState } from "react";
import styles from "./Calc.module.css";
import InputBar from "./InputBar";
import Tab from "./Tab";

function Calc() {
  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar />
        <Tab />
      </div>
    </div>
  );
}

export default Calc;
