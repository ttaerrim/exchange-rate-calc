import React, { useState, useEffect } from "react";
import style from "./FirstCalc.module.css";

const FirstCalc = () => {
  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2";
  const [quotes, setQuotes] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1195.755008);
  const [country, setCountry] = useState("KRW");

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

  //환율 계산하는 함수
  //달러 => 원화 달러금액 X 환율 = 수취금액

  const handleChangeCountry = (event) => {
    switch (event.target.value) {
      case "krw":
        setExchangeRate(quotes.USDKRW);
        break;
      case "jpy":
        setExchangeRate(quotes.USDJPY);
        break;
      case "php":
        setExchangeRate(quotes.USDPHP);
        break;
    }
    setCountry(event.target.value.toUpperCase());
  };

  return (
    <>
      <h1>환율 계산</h1>
      <div className={`${style.FirstCalc}`}>
        <div>
          <p>송금국가: 미국 (USD)</p>
          <div className={`${style.receive}`}>
            <p>수취국가: </p>
            <select onChange={handleChangeCountry}>
              <option value="krw">한국(KRW)</option>
              <option value="jpy">일본(JPY)</option>
              <option value="php">필리핀(PHP)</option>
            </select>
          </div>

          <div className={`${style.receive}`}>
            <p>
              환율: {exchangeRate} {country}/USD
            </p>
          </div>

          <div className={`${style.receive}`}>
            <p>송금액: </p>
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
