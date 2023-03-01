import React from 'react';
import "../css/InputTag.css";

function Input(params) {
  return(
    <div className="inputContainer">
      <input id={params.id} key={params.id} type={params.type} name={params.name} required onChange={params.onchange} />
      <label htmlFor={params.id}>{params.labelText}</label>
    </div>
  )
}

export default Input;


