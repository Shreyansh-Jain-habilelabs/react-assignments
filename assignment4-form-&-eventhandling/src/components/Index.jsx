import React from 'react';

function Input(params) {
  return(
    <div className="inputContainer">
      <input id={params.id} key={params.id} type={params.type} name={params.name} onChange={params.onchange} value={params.value} placeholder={params.labelText}/>
      <label htmlFor={params.id}>{params.labelText}</label>
    </div>
  )
}

export default Input;