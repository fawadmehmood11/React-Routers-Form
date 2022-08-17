import { createSlice, current } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
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
      console.log(typeof id);
      const filterUsers = state.users.filter((user) => user.id !== id);
      state.users = [...filterUsers, action.payload];
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const filterUsers = state.users.filter((user) => user.id !== id);
      state.users = filterUsers;
    },
  },
});

export const getAllUsers = (state) => state.users.users;

export const getUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);

export const { editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
