import React from "react";

const UserList = ({ user: { avatar, name, id, description } }) => {
  return (
    <tr>
      <td className="userImgContainer">
        <img className="userImg" src={avatar} alt="" />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description.substring(0, 40)}</td>
    </tr>
  );
};

export default UserList;
