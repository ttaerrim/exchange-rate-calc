import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SelectCalc.module.css";

import Input from "components/UI/Input";
import AmountReceived from "./AmountReceived";
import { getComma } from "utils";

function SelectCalc() {
  const [nation, setNation] = useState("KRW");
  const [isShow, setIsShow] = useState(false);
  const [sendMoney, setSendMoney] = useState(0);

  const exchangeRate = useSelector((s) => s.rate.exchangeRate);
  const saveRate = exchangeRate["USD" + nation];

  const getMoney = sendMoney * saveRate;

  const handleSendMoney = (e) => {
    setSendMoney(e.target.value);
    setIsShow(false);
  };

  const handleChangeCountry = (event) => {
    setIsShow(false);
    setNation(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>환율 계산</h1>
        <p>송금국가: 미국(USD)</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.receiveNation}>
            <label>
              수취국가:
              <select className={styles.textBox} onChange={handleChangeCountry}>
                <option value="KRW" select="true">
                  한국(KRW)
                </option>
                <option value="JPY">일본(JPY)</option>
                <option value="PHP">필리핀(PHP)</option>
              </select>
            </label>
          </div>
          <div className={styles.textLine}>
            <p>
              환율: {getComma(saveRate)} {nation}/USD
            </p>
          </div>
          <div className={styles.textLine}>
            송금액:
            <Input
              className={styles.textBox}
              value={sendMoney}
              onChange={handleSendMoney}
            />
            USD
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <AmountReceived
          isShow={isShow}
          sendMoney={sendMoney}
          getMoney={getMoney}
          nation={nation}
        />
      </div>
    </div>
  );
}

export default SelectCalc;
