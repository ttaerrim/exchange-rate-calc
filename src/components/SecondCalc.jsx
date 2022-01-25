import React, { useState, useEffect } from "react";
import InputBar from "./UserInput/InputBar";
import Tab from "./TabAndInfo/Tab";

import styles from "./SecondCalc.module.css";
import { useDispatch, useSelector } from "react-redux";
import { exchangeRateActions, inputActions } from "../store";

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
