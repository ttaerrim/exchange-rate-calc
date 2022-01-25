import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../store/index";

import Input from "../UI/Input";
import styles from "./InputBar.module.css";

function InputBar() {
  const dispatch = useDispatch();
  const selectedAmmount = useSelector((state) => state.input.ammount);
  const selectedCurrency = useSelector((state) => state.input.currency);
  const currencyArr = useSelector((state) => state.input.currencyArr);

  const inputValue = useRef();
  const currencyRef = useRef();

  const defaultValue = 1000;

  const getValueHandler = (test) => {
    console.log(test.target.value);
    const newValue = inputValue.current.value;
    if (Number(newValue) >= 1000) {
      dispatch(inputActions.selectInput(defaultValue));
    } else if (newValue < 0) {
      dispatch(inputActions.selectInput(""));
    } else {
      dispatch(inputActions.selectInput(newValue.toLocaleString()));
    }
  };

  const getCurrenyHandler = () => {
    const saveCurrency = currencyRef.current.value;
    dispatch(inputActions.selectCurrency(saveCurrency));
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputMoney}>
        <Input
          type="text"
          onChange={getValueHandler}
          refValue={inputValue}
          value={selectedAmmount}
        />
      </div>
      <select
        className={styles.selectMoney}
        onChange={getCurrenyHandler}
        ref={currencyRef}
        value={selectedCurrency}
      >
        {currencyArr.map((data) => {
          return <option key={Math.random()}>{data}</option>;
        })}
      </select>
    </div>
  );
}

export default InputBar;
