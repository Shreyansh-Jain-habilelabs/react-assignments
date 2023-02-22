import React from "react";
import "../css/Input.css";

function Input(param) {
  return (
    <div className="inputDiv">
      <label htmlFor={param.id}>{param.labelText}</label>
      <input id={param.id} type={param.type} name={param.name} />
      {/* {param.type === "radio" && 
      ( <>
          <label htmlFor={param.id}>{param.labelText}</label>
          <input id={param.id} type={param.type} name={param.name} />
        </>
      )} */}
    </div>
  );
}

export default Input;