import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputActions, tabActions } from "store/index";

import Input from "components/UI/Input";
import styles from "./InputBar.module.css";

function InputBar() {
  const dispatch = useDispatch();
  const selectedAmmount = useSelector((state) => state.input.ammount);
  const selectedCurrency = useSelector((state) => state.input.currency);
  const currencyArr = useSelector((state) => state.input.currencyArr);
  const tabArr = useSelector((state) => state.tab.tabArr);

  const inputValue = useRef();
  const currencyRef = useRef();

  const getValueHandler = (event) => {
    let newValue = inputValue.current.value.replace(/\,/g, "");

    if (event.type === "keyUp" && event.key < 0 && event.key > 9) {
      return;
    } else if (event.type === "change" && isNaN(newValue)) {
      return;
    }
    newValue = Number(newValue).toLocaleString();
    dispatch(inputActions.selectInput(newValue));
  };

  const getCurrenyHandler = () => {
    const saveCurrency = currencyRef.current.value;
    dispatch(inputActions.selectCurrency(saveCurrency));
    const arr = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"].filter(
      (tab) => tab !== saveCurrency
    );
    dispatch(tabActions.activatedTab(arr[0]));
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputMoney}>
        <Input
          type="text"
          onKeyUp={getValueHandler}
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
        {currencyArr.map((data, i) => {
          return <option key={i}>{data}</option>;
        })}
      </select>
    </div>
  );
}

export default InputBar;
