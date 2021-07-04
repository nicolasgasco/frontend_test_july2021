import { createSlice } from "@reduxjs/toolkit";

const menuInitialState = {
  menuOpen: false,
  signinOpen: false,
};

// This state is used for managing opening and closing of hamburger menu on mobile view
const menuSlice = createSlice({
  name: "menu",
  initialState: menuInitialState,
  reducers: {
    toggleMenu(state, action) {
      // Sometimes you just toggles, other times you want direct control of state
      if (action.payload) {
        state.menuOpen = action.payload;
      } else {
        state.menuOpen = !state.menuOpen;
      }
    },
    toggleSignin(state, action) {
      if (action.payload) {
        state.signinOpen = action.payload;
      } else {
        state.signinOpen = !state.signinOpen;
      }
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
