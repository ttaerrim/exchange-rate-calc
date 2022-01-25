import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./FirstCalc.module.css";

import Input from "./UI/Input";

const FirstCalc = () => {
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
              환율:{" "}
              {saveRate?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              {nation}/USD
            </p>
          </div>
          송금액:
          <Input
            className={styles.textBox}
            type="number"
            value={sendMoney}
            onChange={handleSendMoney}
          />
          USD
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <div style={isShow ? { display: "inline-block" } : { display: "none" }}>
          {Number(sendMoney) < 0 || Number(sendMoney) > 10000 ? (
            <p className={styles.wrongResult}>송금액이 바르지 않습니다</p>
          ) : (
            <p className={styles.resultRate}>
              수취금액은{" "}
              {getMoney?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              {nation} 입니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstCalc;
