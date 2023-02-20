import React from "react";
import '../css/Box.css';

function Box(param) {
  return (
    <div className={`cardContainer ${param.class}`}>
      <h3>{param.name}</h3>
      <p>{param.desc}</p>
      <button>Click Me</button>
    </div>
  );
}

export default Box;