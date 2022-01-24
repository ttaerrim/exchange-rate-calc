import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./InputBar.module.css";

function InputBar() {
  const [newValue, setNewValue] = useState("");
  const InputValue = useRef();

  const getValueHandler = () => {
    const currentValue = InputValue.current.value;
    console.log(currentValue);
    if (currentValue < 0) {
      return setNewValue("");
    } else if (currentValue >= 1000) {
      setNewValue(1000);
    } else {
      setNewValue(currentValue);
    }
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
