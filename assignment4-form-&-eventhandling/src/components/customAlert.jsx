import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../css/customAlert.css';

export default function CustomAlert() {
  
  const navigate = useNavigate();
  const {error} = useParams();

  // const hideAgain = () => {
  //   document.getElementsByClassName("customAlert").style.visibility = "hidden";
  //  };

  // const showAlert = () => {
  //   document.getElementsByClassName("customAlert").style.visibility = "visible";
  // };

  return (
    <div className="customAlert">
      <div className='myAlert'>
        <h1>Alert !!</h1>
        <p>{`${error}`}</p>
        <button onClick={() => navigate("/")}>Ok</button>
      </div>
    </div>
  );

}