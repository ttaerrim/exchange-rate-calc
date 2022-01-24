import React, { useEffect } from "react";
import styles from "./Calc.module.css";
import InputBar from "./UserInput/InputBar";
import Tab from "./TabAndInfo/Tab";
import { useState } from "react/cjs/react.development";

function Calc() {
  const [newCurrency, setNewCurreny] = useState();

  useEffect(() => {}, [newCurrency]);
  // async function fetchCurrency() {
  //   const response = await fetch(
  //     "http://api.currencylayer.com/live?access_key=e0e5c1c6b9fb3dee1c72593e85deb3b2&format=1"
  //   );

  //   if (!response.ok) {
  //     const message = `다음과 같은 에러가 발생했습니다: ${response.status}`;
  //     throw new Error(message);
  //   }

  //   const currency = await response.json();
  //   return currency;
  // }

  // fetchCurrency().then((currency) => {
  //   console.log(currency["quotes"]);
  // });

  const getCurrenyHandler = (data) => {
    setNewCurreny(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcBox}>
        <InputBar onCurrency={getCurrenyHandler} />
        <Tab saveCurrency={newCurrency} />
      </div>
    </div>
  );
}

export default Calc;
