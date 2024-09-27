
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    carts: reducer,
  },
});
import reducer from "../Reducers/cartSlice";
