import React, { useState } from "react";
import styles from "./InputBar.module.css";

function InputBar() {
  return (
    <div className={styles.inputBox}>
      <form className={styles.inputMoney}>
        <input type="number" />
      </form>
      <select className={styles.selectMoney}>
        <option>USD</option>
        <option>CAD</option>
        <option>KRW</option>
        <option>HKD</option>
        <option>JPY</option>
        <option>CNY</option>
      </select>
    </div>
  );
}

export default InputBar;
