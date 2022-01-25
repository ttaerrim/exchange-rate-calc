import React, { useState } from "react";
import { useSelector } from "react-redux";

const FirstCalc = () => {
  const [nation, setNation] = useState("KRW");
  const [sendMoney, setSendMoney] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const exchangeRate = useSelector((s) => s.rate.exchangeRate);

  const saveRate = exchangeRate["USD" + nation];
  const getMoney = sendMoney * saveRate;

  const handleChangeCountry = (event) => {
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
          </div>
          <div>
            <p>
              환율 :
              {saveRate?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}{" "}
              {nation}/USD
            </p>
          </div>

          <div>
            <label>
              송금액:
              <input value={sendMoney} onChange={handleSendMoney} />
              USD
            </label>
          </div>
          <button onClick={handleSubmit}>Submit</button>
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
