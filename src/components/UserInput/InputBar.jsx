import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { calcActions } from "../../store";

import Input from "../UI/Input";
import styles from "./InputBar.module.css";

const DUMMY_DATA = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

function InputBar(props) {
  const dispatch = useDispatch();
  const inputAmmount = useSelector((state) => state.calculator.ammount);
  const inputValue = useRef();
  const currencyRef = useRef();

  const getValueHandler = () => {
    const newValue = inputValue.current.value;
    if (newValue > 1000) {
      dispatch(calcActions.selectInput(1000));
    } else if (newValue < 0) {
      dispatch(calcActions.selectInput(""));
    } else {
      dispatch(calcActions.selectInput(newValue));
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
          type="number"
          onChange={getValueHandler}
          refValue={inputValue}
          value={inputAmmount}
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
