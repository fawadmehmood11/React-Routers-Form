import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../features/usersSlice";

const UserList = ({ user: { avatar, name, id, description } }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`edit/${id}`, { replace: true });
  };

  return (
    <tr>
      <td className="userImgContainer">
        <img className="userImg" src={avatar} alt="" />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description.substring(0, 40)}</td>
      <td>
        <button className="btn btnEdit" onClick={handleEdit}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default UserList;
