import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  total: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderItems = action.payload.items;
      state.total = action.payload.total;
    },
    clearOrder: (state) => {
      state.orderItems = [];
      state.total = 0;
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
