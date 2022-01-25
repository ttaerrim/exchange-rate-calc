import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabActions } from "../../store/index";

import Button from "../UI/Button";
import styles from "./TabMenu.module.css";

function TabMenu() {
  const dispatch = useDispatch();

  const tabArr = useSelector((state) => state.tab.tabArr);

  const clickHanlder = (event) => {
    const newActivatedTab = event.target.innerText;
    dispatch(tabActions.activatedTab(newActivatedTab));
  };

  return (
    <div className={styles.tabMenu}>
      {tabArr.map((data) => {
        return (
          <Button key={Math.random()} onClick={clickHanlder}>
            {data}
          </Button>
        );
      })}
    </div>
  );
}

export default TabMenu;
