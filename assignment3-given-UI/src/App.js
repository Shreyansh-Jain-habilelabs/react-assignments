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
  }
];

const boxes = [];

details.forEach((element) => {
  boxes.push(<Box name={element.name} desc={element.desc} class={element.class}/>);
})

function App() {
  return (
    <>
      <Heading/>
      <div className="outerContainer">
        { boxes }
      </div>
    </>
  );
}

export default App;