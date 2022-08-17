import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { editUser, getUserById, deleteUser } from "../features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();
  const { avatar, id, name, description } = useSelector((state) =>
    getUserById(state, Number(userId))
  );

  const dispatch = useDispatch();

  const [userName, setUserName] = useState(name);
  const [userDescription, setUserDescription] = useState(description);

  const handleChange = (e, changeType) => changeType(e.target.value);

  const canSave = [userName, userDescription].every(Boolean);
  const navigate = useNavigate();

  const saveClicked = () => {
    if (canSave) {
      dispatch(
        editUser({
          avatar,
          id,
          name: userName,
          description: userDescription,
        })
      );
      navigate("/users", { replace: true });
    }
  };

  const deleteClicked = () => {
    dispatch(deleteUser({ id }));
    navigate("/users", { replace: true });
  };

  return (
    <div className="editForm flex">
      <h2>Edit User</h2>
      <form className="flex">
        <input
          type="text"
          value={userName}
          onChange={(e) => handleChange(e, setUserName)}
        />
        <textarea
          type="text"
          value={userDescription}
          onChange={(e) => handleChange(e, setUserDescription)}
        />
      </form>

      <button className="btn btnAction" onClick={saveClicked}>
        Edit User
      </button>

      <button className="btn btnAction btnDelete" onClick={deleteClicked}>
        Delete User
      </button>
    </div>
  );
};

export default EditUser;
