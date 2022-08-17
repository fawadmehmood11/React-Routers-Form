import React from "react";
import { useNavigate, Link } from "react-router-dom";

const UserList = ({ user: { avatar, name, id, description } }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log(id);
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

        {/* <Link to={`edit/${id}`}>Edit</Link> */}
      </td>
    </tr>
  );
};

export default UserList;
