import { useState } from "react";
import './App.css';
import Box1 from './components/Box1';

function App() {
  const dataObject = {
    shreyansh : {name:"Shreyansh",age:21,email:"jainnonu30@gmail.com"},

    tanisha : {name:"Tanisha",age:21,email:"tanisha@gmail.com"},

    tarun : {name:"Tarun Kumar",age:23,email:"tarun@gmail.com"}
  }

  const [keys] = useState(dataObject);
  
  return (
    <div className="App">
      <Box1 name={keys.shreyansh.name} age={keys.shreyansh.age} email={keys.shreyansh.email}/>
      <Box1 name={keys.tanisha.name} age={keys.tanisha.age} email={keys.tanisha.email}/>
      <Box1 name={keys.tarun.name} age={keys.tarun.age} email={keys.tarun.email}/>
    </div>
  );
}

export default App;