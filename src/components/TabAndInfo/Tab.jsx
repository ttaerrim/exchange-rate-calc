import React from "react";
import styles from "./Tab.module.css";
import TabContent from "./TabContent";
import TabMenu from "./TabMenu";

function Tab(props) {
  return (
    <div className={styles.tabBox}>
      <TabMenu />
      <TabContent />
    </div>
  );
}

export default Tab;
