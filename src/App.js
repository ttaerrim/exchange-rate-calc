import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import { exchangeRateActions, tabActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.input.currency);
  const activatedTab = useSelector((state) => state.tab.activatedTab);
  const isActivated = useSelector((state) => state.tab.isActivated);

  const apiKey = "e0e5c1c6b9fb3dee1c72593e85deb3b2"; // .env로 관리

  const getCurrency = async () => {
    const json = await (
      await fetch(
        `http://api.currencylayer.com/live?access_key=${apiKey}&format=1`
      )
    ).json();
    dispatch(exchangeRateActions.getExchangeRate(json.quotes));
  };

  useEffect(() => {
    const arr = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
    dispatch(
      tabActions.changeTab(arr.filter((item) => item !== selectedCurrency))
    );
    getCurrency();
  }, [selectedCurrency, dispatch, activatedTab, isActivated]);

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
