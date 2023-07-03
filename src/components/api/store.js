import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./api.js";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
