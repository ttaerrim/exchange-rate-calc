import { configureStore, createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "caculator",
  initialState: { ammount: "", currency: "USD" },
  reducers: {
    selectInput(state, action) {
      state.ammount = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { calculator: calcSlice.reducer },
});

export const calcActions = calcSlice.actions;
export default store;
