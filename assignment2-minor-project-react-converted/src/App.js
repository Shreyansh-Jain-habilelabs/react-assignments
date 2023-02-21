import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LoginForm from "./components/LoginForm.jsx";
import RegistrationFrom from "./components/RegistrationFrom.jsx";

function App() {
  return (
    <>
      <Router />
      <Routes />
      <Route path="/" element={<LoginForm />} />
      <Route path="registrationFrom" element={<RegistrationFrom />} />
      {/* <RegistrationFrom /> */}
      <Routes />/
      <Router />
      {/* <RegistrationFrom /> */}
    </>
  );
}

export default App;
