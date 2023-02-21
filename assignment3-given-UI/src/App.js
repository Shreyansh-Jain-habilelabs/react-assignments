import React from "react";
import Box from "./components/Box";
import Heading from "./components/Heading";
import './App.css';

const details = [
  {
    name: "Shreyansh",
    desc: "my name is shreyansh jain",
    class: "red"
  },
  {
    name: "Tarun",
    desc: "my name is tarun",
    class: "blue"
  },
  {
    name: "Abc",
    desc: "my name is abc",
    class: "marhoon"
  },
  {
    name: "XYZ",
    desc: "my name is xyz",
    class: "red"
  },
  {
    name: "Tanisha",
    desc: "my name is tanisha",
    class: "marhoon"
  }
];

function App() {
  return (
    <>
      <Heading/>
      <div className="outerContainer">
        { details.map( element =>  <Box name={element.name} desc={element.desc} class={element.class}/> ) }
      </div>
    </>
  );
}

export default App;