import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


import Input from "./Index.jsx";
import InputTagsData from "../data/data.json";
import {validateName, validatePhone, validateState, validateAddress} from '../validations.js';


import "../css/form.css";

export default function From() {
  const navigate = useNavigate();

  const [userInputData, setuserInputData] = useState({});
  const [error, setError] = useState({ name: "", state: "", phoneNumber: "", address: "", gender: "" });

  const handleChange = (e) => {
    if (e.target.name === "gender") {
      setuserInputData({ ...userInputData, [e.target.name]: e.target.id });
    } else {
      setuserInputData({ ...userInputData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputData);

    if (
      "name" in userInputData &&
      "phoneNumber" in userInputData &&
      "state" in userInputData &&
      "address" in userInputData &&
      "gender" in userInputData
    ) {
      if (!validateName(userInputData.name)) {
        setError((pre) => ({
          ...pre,
          name: `Invalid Name !!`,
        }));
        navigate(`/${error.name}`);
      } else {  
        setError((pre) => ({
          ...pre,
          name: ``,
        }));
      }

      if (!validatePhone(userInputData.phoneNumber)) {
        setError((pre) => ({
          ...pre,
          phoneNumber: `Invalid Phone Number !!`,
        }));
        navigate(`/${error.phoneNumber}`);

      } else {
        setError((pre) => ({
          ...pre,
          phoneNumber: ``,
        }));
      }

      if (!validateState(userInputData.state)) {
        setError((pre) => ({
          ...pre,
          state: `Invalid State !!`,
        }));
        navigate(`/${error.state}`);
      } else {
        setError((pre) => ({
          ...pre,
          state: ``,
        }));
      }

      if (!validateAddress(userInputData.address)) {
        setError((pre) => ({
          ...pre,
          address: `Invalid Address !!`,
        }));
        navigate(`/${error.address}`);
      } else {
        setError((pre) => ({
          ...pre,
          address: ``,
        }));
      }
    } else {
      navigate(`/No Field Can Be Empty`);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        {InputTagsData.map((value) => (
          <Input id={value.id} name={value.name} type={value.type} labelText={value.labelText} value={value.val} onchange={handleChange} />
        ))}
        <Input id="submit" name="submit" type="submit" />
      </form>
    </div>
  );
}
