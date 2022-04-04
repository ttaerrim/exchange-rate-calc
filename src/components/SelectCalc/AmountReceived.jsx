import { getComma } from "utils";
import styles from "./SelectCalc.module.css";

function AmountReceived({ isShow, sendMoney, getMoney, nation }) {
  return (
    <div style={isShow ? { display: "inline-block" } : { display: "none" }}>
      {Number(sendMoney) < 0 ||
      Number(sendMoney) > 10000 ||
      isNaN(Number(sendMoney)) ? (
        <p className={styles.wrongResult}>송금액이 바르지 않습니다</p>
      ) : (
        <p className={styles.resultRate}>
          수취금액은 {getComma(getMoney)} {nation} 입니다.
        </p>
      )}
    </div>
  );
}
export default AmountReceived;
