import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Form.css";
import { validateName, validateEmail, validatePassword, validatePhone, validateSecurityKey } from "../js/validationFunctions";
import {generateSecurityKey} from "../js/securityKeyGenerator";

export default function RegistrationFrom() {

  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState({ name: "", email: "", password: "", phoneNum: "", securityKey: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registerUser.name.length &&
      registerUser.email.length &&
      registerUser.password.length &&
      registerUser.phoneNum.length &&
      registerUser.securityKey.length &&
      registerUser.name.trim() &&
      registerUser.email.trim() &&
      registerUser.password.trim() &&
      registerUser.phoneNum.trim()
    ) {
      if (
        validateName(registerUser.name) &&
        validateEmail(registerUser.email) &&
        validatePassword(registerUser.password) &&
        validatePhone(registerUser.phoneNum) &&
        validateSecurityKey(registerUser.securityKey)
      ) {
          let dataInLocalStorage = localStorage.getItem("registeredUsersData");
          dataInLocalStorage = dataInLocalStorage ? JSON.parse(dataInLocalStorage) : [];
          dataInLocalStorage.push(registerUser);
          localStorage.setItem("registeredUsersData", JSON.stringify(dataInLocalStorage));
          alert("Registration Successful");
          navigate('/');
      }
    } else {
      alert("No field can be empty!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterUser({ ...registerUser, [id]: value });
  };

  return (
    <div className="containerBox">
      <form className="containerForm" onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" id="name" required onChange={handleChange} />
          <label htmlFor="name">Name</label>
        </div>

        <div className="inputBox">
          <input type="text" id="email" required onChange={handleChange} />
          <label htmlFor="email">Email</label>
        </div>

        <div className="inputBox">
          <input type="text" id="phoneNum" required onChange={handleChange} />
          <label htmlFor="phoneNum">Phone Number</label>
        </div>

        <div className="inputBox">
          <input type="text" id="password" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <button id="eyeButton">
            <ion-icon name="eye-outline"></ion-icon>
          </button>
        </div>

        <div className="inputBox" id="securityField">
          <div className="securityKeyBox">
            <input type="text" id="securityKey" required readOnly />
            <label htmlFor="securityKey">Security Key</label>
          </div>
          <div className="securityKeyGeneratorBox">
            <button>
              <ion-icon name="reload-circle-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className="inputBox">
          <input type="submit" id="registerButton" value="Register" onClick={generateSecurityKey}/>
        </div>
      </form>
    </div>
  );
}
