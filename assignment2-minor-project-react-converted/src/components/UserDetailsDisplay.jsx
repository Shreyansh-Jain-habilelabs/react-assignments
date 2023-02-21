import React from "react";
// import "../css/Form.css";
import "../css/Display.css";

const UserDetailsDisplay = () => {

  let loginedUser = JSON.parse(localStorage.getItem("nowUserLoginData"));

  return (
    <div className="containerBox">

      <div className="containerForm">

        <div className="inputBox">
          <input type="text" id="nameDisplay" value={loginedUser.name} required readOnly />
          <label htmlFor="nameDisplay">Name</label>
        </div>

        <div className="inputBox">
          <input type="text" id="emailDisplay" value={loginedUser.email} required readOnly />
          <label htmlFor="emailDisplay">Email</label>
        </div>

        <div className="inputBox">
          <input type="text" id="phoneNumDisplay" value={loginedUser.phoneNum} required readOnly />
          <label htmlFor="phoneNumDisplay">Phone Number</label>
        </div>

        <div className="inputBox">
          <input type="text" id="passwordDisplay" value={loginedUser.password} required readOnly />
          <label htmlFor="passwordDisplay">Password</label>
        </div>

        <div className="inputBox">
          <input type="text" id="securityKeyDisplay" value={loginedUser.securityKey} required readOnly />
          <label htmlFor="securityKeyDisplay">Security Key</label>
        </div>

      </div>

    </div>
  );
};

export default UserDetailsDisplay;