import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { persistCart } from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import orderReducer from "../features/order/orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

persistCart(store);

export default store;
