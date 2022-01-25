import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FirstCalc from "./components/FirstCalc";
import SecondCalc from "./components/SecondCalc";
import Nav from "./components/Nav/Nav";

import { tabActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.input.currency);
  const activatedTab = useSelector((state) => state.tab.activatedTab);
  const isActivated = useSelector((state) => state.tab.isActivated);

  useEffect(() => {
    const arr = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
    dispatch(
      tabActions.changeTab(arr.filter((item) => item !== selectedCurrency))
    );
  }, [selectedCurrency, dispatch, activatedTab, isActivated]);

  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path={"/"} element={<FirstCalc />} />
        </Routes>
        <Routes>
          <Route path={"/second"} element={<SecondCalc />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
