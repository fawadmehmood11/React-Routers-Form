import { createSlice, current } from "@reduxjs/toolkit";
import { getUsers } from "../data";

const initialState = getUsers();
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser: (state, action) => {
      console.log(current(state));
    },
  },
});

export const getAllUsers = (state) => state.users;

export const { editUser } = usersSlice.actions;
export default usersSlice.reducer;
