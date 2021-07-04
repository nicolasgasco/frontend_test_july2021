import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  featuredProducts: [],
};

// This state is used for managing opening and closing of hamburger menu on mobile view
const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    fetchProductsFromDb(state, action) {},
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
