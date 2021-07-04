import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu";
import authReducer from "./auth";
import productsReducer from "./products";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

export default store;
