import React from "react";
import { useSelector } from "react-redux";

import styles from "./TabContent.module.css";

function TabContent(props) {
  const activatedTab = useSelector((state) => state.tab.activatedTab);
  const inputValue = useSelector((state) => state.input.ammount);
  const dropDownValue = useSelector((state) => state.input.currency);

  const exchangeRate = props.exchangeRate;

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("en-US", { month: "short" });
  const day = newDate.getDate();
  return (
    <div className={styles.contentBox}>
      <h2>
        {activatedTab}{" "}
        {(
          inputValue *
          (exchangeRate["USD" + activatedTab] /
            exchangeRate["USD" + dropDownValue])
        )
          .toFixed(2)
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
      </h2>
      <h4>기준일 :</h4>
      <h4>{`${year}-${month}-${day}`}</h4>
    </div>
  );
}

export default TabContent;
