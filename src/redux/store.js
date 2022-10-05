import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import orderReducer from "../features/cart/orderSlice";
import CartReducer from "../features/cart/cart";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    order: orderReducer,
    cartCount: CartReducer,
  },
});
