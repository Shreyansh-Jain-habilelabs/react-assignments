import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Form.css";
import { validateName, validateEmail, validatePassword, validatePhone, validateSecurityKey } from "../js/validationFunctions";
import ToggleEyeButton from "../js/toggleEyebutton";


export default function RegistrationFrom() {
  
  const generateSecurityKey = (e) => {
    e.preventDefault();

    let numberCharacters = "1234567890";
    let specialCharacters = "@#%&*!";

    let code = "";
    let length = Math.floor(Math.random() * 5) + 6;
    let presentCodeLength = length;

    for (let i = 0; i < length; i++) {
      code += numberCharacters.charAt(Math.floor(Math.random() * numberCharacters.length));
      presentCodeLength--;
      if (!presentCodeLength) {
        break;
      }
      code += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
      presentCodeLength--;
      if (!presentCodeLength) {
        break;
      }
    }

    // ----------------------------- Mixing the Code -----------------------------

    let arr = code.split("");

    for (let i = 0; i < arr.length; ++i) {
      let j = Math.floor(Math.random() * arr.length); // Get random of [0, n-1]
      let temp = arr[i]; // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }

    code = arr.join("");

    setRegisterUser({ ...registerUser, securityKey: code });
    document.getElementById("securityKey").setAttribute("value", code);
  }

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
          navigate('/loginForm');
      }
    } else {
      alert("No field can be empty!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterUser({ ...registerUser, [id]: value });
  };
  console.log(registerUser);

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
          <button id="eyeButton" onClick={ToggleEyeButton}>
            <ion-icon name="eye-outline"></ion-icon>
          </button>
        </div>

        <div className="inputBox" id="securityField">
          <div className="securityKeyBox">
            <input type="text" id="securityKey" required readOnly/>
            <label htmlFor="securityKey">Security Key</label>
          </div>
          <div className="securityKeyGeneratorBox">
            <button onClick={generateSecurityKey}>
              <ion-icon name="reload-circle-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className="inputBox">
          <input type="submit" id="registerButton" value="Register" />
        </div>

      </form>
    </div>
  );
}
