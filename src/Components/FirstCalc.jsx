import React, { useState, useEffect } from "react";
import style from "./FirstCalc.module.css";

const FirstCalc = () => {
  const access_key = "4e8b4a82ea5e0ae977ad9426c136f301";
  const [quotes, setQuotes] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);

  const getCurrency = async () => {
    const response = await fetch(
      "http://api.currencylayer.com/live?access_key=" + access_key
    );
    const json = await response.json();
    setQuotes(json.quotes);
  };

  useEffect(getCurrency, [quotes]);

  //환율 계산하는 함수
  //달러 => 원화 달러금액 X 환율 = 수취금액

  const handleChangeCountry = (event) => {
    switch (event.target.value) {
      case "krw":
        console.log(quotes.USDKRW);
        // setExchangeRate(quotes.USDKRW);
        break;
      case "jpy":
        console.log(quotes);
        // setExchangeRate(quotes.USDJPY);
        break;
      case "php":
        console.log(quotes);
        // setExchangeRate(quotes.USDPHP);
        break;
    }
    console.log(exchangeRate);
  };

  return (
    <>
      <h1>환율 계산</h1>
      <div className={`${style.FirstCalc}`}>
        <div>
          <p>송금국가 : 미국 (USD)</p>
          <div className={`${style.receive}`}>
            <p>수취국가 : </p>
            <select onChange={handleChangeCountry}>
              <option value="krw">한국(KRW)</option>
              <option value="jpy">일본(JPY)</option>
              <option value="php">필리핀(PHP)</option>
            </select>
          </div>

          <div className={`${style.receive}`}>
            <p>환율 :</p>
          </div>

          <div className={`${style.receive}`}>
            <p>송금액 : </p>
            <input />
            <p>USD</p>
          </div>

          <button>Submit</button>
        </div>
      </div>
      <div>
        <p>수취금액은 :</p>
        {}
        <p>입니다.</p>
      </div>
    </>
  );
};

export default FirstCalc;
