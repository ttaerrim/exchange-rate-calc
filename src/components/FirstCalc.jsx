import React, { useState, useEffect } from "react";
import style from "./FirstCalc.module.css";

const FirstCalc = () => {
  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2";
  const [quotes, setQuotes] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [nation, setNation] = useState("KRW");
  //아래 state 하나로 합치기 ->리팩토링
  const [sendMoney, setSendMoney] = useState(0);
  const [getMoney, setGetMoney] = useState(0);

  const [isShow, setIsShow] = useState(false);

  const getCurrency = async () => {
    const response = await fetch(
      `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
    );
    const json = await response.json();
    setQuotes(json.quotes);
  };

  useEffect(() => {
    getCurrency();
  }, [quotes.USDKRW, quotes.USDJPY, quotes.USDPHP]);

  const handleChangeCountry = (event) => {
    switch (event.target.value) {
      case "KRW":
        setExchangeRate(quotes.USDKRW);
        break;
      case "JPY":
        setExchangeRate(quotes.USDJPY);
        break;
      case "PHP":
        setExchangeRate(quotes.USDPHP);
        break;
      default:
        break;
    }
    setIsShow(false);
    setNation(event.target.value);
  };

  const handleSendMoney = (e) => {
    setSendMoney(e.target.value);
  };

  const handleSubmit = () => {
    setGetMoney((curr) =>
      (sendMoney * exchangeRate).toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
    );
    setIsShow(true);
  };

  return (
    <>
      <h1>환율 계산</h1>
      <div>
        <div>
          <p>송금국가: 미국(USD)</p>
          <div>
            수취국가:
            <select onChange={handleChangeCountry}>
              <option value="KRW" select="true">
                한국(KRW)
              </option>
              <option value="JPY">일본(JPY)</option>
              <option value="PHP">필리핀(PHP)</option>
            </select>
          </div>

          <div>
            <p>
              환율 :
              {exchangeRate.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              {nation}/USD
            </p>
          </div>

          <div>
            <p>
              송금액:
              <input value={sendMoney} onChange={handleSendMoney} />
              USD
            </p>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div style={isShow ? { display: "inline-block" } : { display: "none" }}>
        <p>
          수취금액은 {getMoney} {nation} 입니다.
        </p>
      </div>
    </>
  );
};

export default FirstCalc;
