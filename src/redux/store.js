import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: AuthSlice
  }
});


export default store;