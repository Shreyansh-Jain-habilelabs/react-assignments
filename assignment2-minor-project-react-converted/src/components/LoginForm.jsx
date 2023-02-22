import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Form.css";
import { validatePassword, validateSecurityKey, validateUsername } from "../js/validationFunctions";
import ValidateUser from "../js/matchCrudentials";

export default function LoginForm() {
  const navigate = useNavigate();
  const [userLoginData, setUserLoginData] = useState({ username: "", password: "", securityKey: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userLoginData.username.length &&
      userLoginData.password.length &&
      userLoginData.securityKey.length &&
      userLoginData.username.trim() &&
      userLoginData.password.trim() &&
      userLoginData.securityKey.trim()
    ) {
      if (
        validateUsername(userLoginData.username) && 
        validatePassword(userLoginData.password) &&
        validateSecurityKey(userLoginData.securityKey)
      ) {
        let nowUserLoginData = ValidateUser(userLoginData);
        if (nowUserLoginData) {
          alert("Login Successful");
          localStorage.setItem("nowUserLoginData", JSON.stringify(nowUserLoginData));
          navigate("/UserDetailsDisplay");
        } else {
          alert("User Doesn't exist please register first!");
          navigate("/");
        }
      }
    } else {
      alert("No field can be empty!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserLoginData({ ...userLoginData, [id]: value });
  };

  return (
    <div className="containerBox">
      <form action="#" className="containerForm" onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" id="username" required onChange={handleChange} />
          <label htmlFor="username">Email&#47;Phone Number</label>
        </div>

        <div className="inputBox">
          <input type="text" id="password" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <button id="eyeButton">
            <ion-icon name="eye-outline"></ion-icon>
          </button>
        </div>

        <div className="inputBox">
          <input type="text" id="securityKey" required onChange={handleChange} />
          <label htmlFor="securityKey">Security Key</label>
        </div>

        <div className="inputBox">
          <input type="submit" id="loginButton" value="Login" />
        </div>
      </form>
    </div>
  );
}
