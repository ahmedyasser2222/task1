import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import orderReducer from "../features/cart/orderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    order: orderReducer,
  },
});
