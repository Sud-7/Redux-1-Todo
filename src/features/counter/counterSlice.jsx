import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count2: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count2 += 1;
    },
    decrement: (state) => {
      state.count2 -= 1;
    },
    reset: (state) => {
      state.count2 = 0;
    },
    incrementByAmount: (state, action) => {
      state.count2 += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
