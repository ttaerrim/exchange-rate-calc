import React, { useRef, useState } from "react";

import Input from "../UI/Input";
import styles from "./InputBar.module.css";

const DUMMY_DATA = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

function InputBar(props) {
  const [newValue, setNewValue] = useState("");
  const InputValue = useRef();
  const currencyRef = useRef();

  const getValueHandler = () => {
    const currentValue = InputValue.current.value;

    if (currentValue < 0) {
      return setNewValue("");
    } else if (currentValue >= 1000) {
      setNewValue(1000);
    } else {
      setNewValue(currentValue);
    }
  };

  const getCurrenyHandler = () => {
    const saveCurrency = currencyRef.current.value;
    props.onCurrency(saveCurrency);
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputMoney}>
        <Input
          onChange={getValueHandler}
          type="number"
          refValue={InputValue}
          value={newValue}
        />
      </div>
      <select
        className={styles.selectMoney}
        onChange={getCurrenyHandler}
        ref={currencyRef}
      >
        {DUMMY_DATA.map((data) => {
          return <option key={Math.random()}>{data}</option>;
        })}
      </select>
    </div>
  );
}

export default InputBar;
