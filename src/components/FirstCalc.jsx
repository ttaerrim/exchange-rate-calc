import React, { useState, useEffect } from "react";
import style from "./FirstCalc.module.css";

const FirstCalc = () => {
  const [quotes, setQuotes] = useState(null);
  const [nation, setNation] = useState("KRW");
  const exchangeRate = quotes && quotes["USD" + nation];
  const [sendMoney, setSendMoney] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const getMoney = sendMoney * exchangeRate;

  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2";
  const getCurrency = async () => {
    const response = await fetch(
      `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
    );
    const json = await response.json();
    setQuotes(json.quotes);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  const handleChangeCountry = (event) => {
    setIsShow(false);
    setNation(event.target.value);
  };

  const handleSendMoney = (e) => {
    setSendMoney(e.target.value);
  };

  const handleSubmit = () => {
    setIsShow(true);
  };

  return (
    <>
      <h1>환율 계산</h1>
      <div>
        <div>
          <h2>송금국가: 미국(USD)</h2>
          <label>
            수취국가:
            <select onChange={handleChangeCountry}>
              <option value="KRW" select="true">
                한국(KRW)
              </option>
              <option value="JPY">일본(JPY)</option>
              <option value="PHP">필리핀(PHP)</option>
            </select>
          </label>

          <div>
            <p>
              환율 :
              {exchangeRate?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              {nation}/USD
            </p>
          </div>

          <form>
            <label>
              송금액:
              <input value={sendMoney} onChange={handleSendMoney} />
              USD
            </label>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <div style={isShow ? { display: "inline-block" } : { display: "none" }}>
        <p>
          수취금액은{" "}
          {getMoney?.toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}{" "}
          {nation} 입니다.
        </p>
      </div>
    </>
  );
};

export default FirstCalc;
