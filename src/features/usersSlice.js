import { createSlice, current } from "@reduxjs/toolkit";
import { getUsers } from "../data";

const initialState = {
  users: [...getUsers()],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser: (state, action) => {
      const { id } = action.payload;
      const filterUSers = state.users.filter((user) => user.id !== id);
      state.users = [...filterUSers, action.payload];
      console.log(filterUSers);
    },
  },
});

export const getAllUsers = (state) => state.users.users;

export const getUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);

export const { editUser } = usersSlice.actions;
export default usersSlice.reducer;
