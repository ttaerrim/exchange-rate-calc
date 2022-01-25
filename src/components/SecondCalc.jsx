import React, { useState, useEffect } from "react";
import InputBar from "./UserInput/InputBar";
import Tab from "./TabAndInfo/Tab";

import styles from "./SecondCalc.module.css";

function SecondCalc() {
  const [exchangeRate, setExchangeRate] = useState({});

  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2"; // .env로 관리

  const getCurrency = async () => {
    const json = await (
      await fetch(
        `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
      )
    ).json();
    setExchangeRate(json.quotes);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar />
        <Tab exchangeRate={exchangeRate} />
      </div>
    </div>
  );
}

export default SecondCalc;
