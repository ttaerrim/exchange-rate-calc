import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabActions } from "store/index";

import Button from "components/UI/Button";
import styles from "./TabMenu.module.css";

function TabMenu() {
  const dispatch = useDispatch();
  const tabArr = useSelector((state) => state.tab.tabArr);
  const currentTab = useSelector((state) => state.tab.activatedTab);

  const clickHanlder = (event) => {
    const newActivatedTab = event.target.innerText;
    dispatch(tabActions.activatedTab(newActivatedTab));
  };

  return (
    <div className={styles.tabMenu}>
      {tabArr.map((data, i) => {
        return (
          <Button
            key={i}
            onClick={clickHanlder}
            className={data === currentTab ? styles.active : null}
          >
            {data}
          </Button>
        );
      })}
    </div>
  );
}

export default TabMenu;
