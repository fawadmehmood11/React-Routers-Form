import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};

const isLoggedSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state) => {
      current(state);
      state.isLoggedIn = true;
    },

    resetLogin: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const getLoginValue = (state) => state.login.isLoggedIn;

export const { setLogin, resetLogin } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;
