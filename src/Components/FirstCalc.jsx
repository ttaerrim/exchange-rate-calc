import React, { useState, useEffect } from "react";
import style from "./FirstCalc.module.css";

const FirstCalc = () => {


  return (
    <>
      <h1>환율 계산</h1>
      <div className={`${style.FirstCalc}`}>
        <div>
          <p>송금국가 : 미국 (USD)</p>
          <div className={`${style.receive}`}>
            <p>수취국가 : </p>
            <select name="" id="">
              <option value="krw">한국(KRW)</option>
              <option value="jpy">일본(JPY)</option>
              <option value="php">필리핀(PHP)</option>
            </select>
          </div>

          <div className={`${style.receive}`}>
            <p>환율 : </p>
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
