import React from "react";
import UserList from "./UserList";
import { Outlet, useNavigate } from "react-router-dom";
import { getAllUsers } from "../features/usersSlice";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector(getAllUsers);
  const sortedUsers = [...users].sort((a, b) => a.id - b.id);
  console.log(sortedUsers);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/", { replace: true });
  };

  const usersList = sortedUsers.map((user) => {
    return <UserList key={user.id} user={user} />;
  });
  return (
    <div className="tableWrapper">
      <button className="btn" onClick={handleLogOut}>
        Logout
      </button>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
            <th>Descrition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>

      {/* <Outlet /> */}
    </div>
  );
};

export default User;
