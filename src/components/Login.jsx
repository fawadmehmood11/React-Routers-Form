import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../features/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailInput, setEmailValue] = useState("");
  const [passwordInput, setPasswordValue] = useState("");
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const { email, password } = JSON.parse(localStorage.getItem("credentials"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (email === emailInput && password === passwordInput) {
      dispatch(setLogin());
      navigate("/users");
      return;
    }

    if (!validateEmail(emailInput)) {
      console.log(invalidEmail);
      setinvalidEmail(true);
    }

    if (passwordInput.length === 0) {
      setCheckPassword(true);
    }
  };

  // const isDisplay = invalidEmail ? "displayValidation" : "hideValidation";

  const displayError = (validation) =>
    validation ? "displayValidation" : "hideValidation";

  const handleChange = (e, changeType) => {
    if (e.target.type === "text") {
      setinvalidEmail(false);
    }

    if (e.target.type === "password") {
      setCheckPassword(false);
    }

    changeType(e.target.value);
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <div className="login">
      <h1>Sign in to your account</h1>
      <p className="introText">
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </p>

      <form>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => handleChange(e, setEmailValue)}
          />
          <p className={"error " + displayError(invalidEmail)}>
            Please enter Valid Email Address
          </p>
        </div>

        <div className="inputWrapper">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => handleChange(e, setPasswordValue)}
            required
          />
          <p className={"error " + displayError(checkPassword)}>
            Password cannot be empty
          </p>
        </div>
      </form>

      <button className="btn" onClick={handleClick}>
        {/* <Link className = 'btnLogin' to="/users" onClick={handleClick}>
        Login
      </Link> */}
        Login
      </button>
    </div>
  );
};

export default Login;
