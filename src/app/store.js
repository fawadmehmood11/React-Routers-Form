import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../features/LoginSlice";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});
