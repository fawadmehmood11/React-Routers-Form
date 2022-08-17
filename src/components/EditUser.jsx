import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { editUser, getUserById } from "../features/usersSlice";
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
        editUser({ avatar, id, name: userName, description: userDescription })
      );
      navigate("/users", { replace: true });
    }
  };
  return (
    <div className="editForm">
      <form>
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

      <button className="btn" onClick={saveClicked}>
        Save User
      </button>
    </div>
  );
};

export default EditUser;
