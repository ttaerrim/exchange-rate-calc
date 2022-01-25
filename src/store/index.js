import { configureStore, createSlice } from "@reduxjs/toolkit";

const inputInitialState = {
  ammount: "",
  currency: "USD",
  currencyArr: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
};

const inputSlice = createSlice({
  name: "input",
  initialState: inputInitialState,
  reducers: {
    selectInput(state, action) {
      state.ammount = action.payload;
    },
    selectCurrency(state, action) {
      state.currency = action.payload;
    },
    changeCurrencyArr(state, action) {
      state.currencyArr = action.payload;
    },
  },
});

const tabInitialState = {
  tabArr: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
  isActivated: [
    { USD: false },
    { CAD: false },
    { KRW: false },
    { HKD: false },
    { JPY: false },
    { CNY: false },
  ],
  activatedTab: "CAD",
};
const tabSlice = createSlice({
  name: "tab",
  initialState: tabInitialState,
  reducers: {
    changeTab(state, action) {
      state.tabArr = action.payload;
    },
    stayActivate(state, action) {
      state.isActivated = action.payload;
    },
    activatedTab(state, action) {
      state.activatedTab = action.payload;
    },
  },
});

const exchangeRateSlice = createSlice({
  name: "currency",
  initialState: { exchangeRate: "" },
  reducers: {
    getExchangeRate(state, action) {
      state.exchangeRate = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    tab: tabSlice.reducer,
    rate: exchangeRateSlice.reducer,
  },
});

export const inputActions = inputSlice.actions;
export const tabActions = tabSlice.actions;
export const exchangeRateActions = exchangeRateSlice.actions;

export default store;
