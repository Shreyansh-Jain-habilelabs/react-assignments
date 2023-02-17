import React from "react";

function Box1(props) {
  return (
    <div className="divBox">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  )
}
export default Box1;
