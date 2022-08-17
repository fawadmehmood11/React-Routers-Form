import React from "react";
import UserList from "./UserList";
import { getUsers } from "../data";
import { useNavigate } from "react-router-dom";

const User = () => {
  const users = getUsers();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/", { replace: true });
  };

  const usersList = users.map((user) => {
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
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </div>
  );
};

export default User;
