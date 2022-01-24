import React, { useState } from "react";
import styles from "./Calc.module.css";
import InputBar from "./InputBar";
import Tab from "./Tab";

function Calc() {
  async function fetchCurrency() {
    const response = await fetch(
      "http://api.currencylayer.com/live?access_key=e0e5c1c6b9fb3dee1c72593e85deb3b2&format=1"
    );

    if (!response.ok) {
      const message = `다음과 같은 에러가 발생했습니다: ${response.status}`;
      throw new Error(message);
    }

    const currency = await response.json();
    return currency;
  }

  fetchCurrency().then((currency) => {
    console.log(currency["quotes"]);
  });

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
