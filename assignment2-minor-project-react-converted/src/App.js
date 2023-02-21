import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LoginForm from "./components/LoginForm.jsx";
import RegistrationFrom from "./components/RegistrationFrom.jsx";
import UserDetailsDisplay from "./components/UserDetailsDisplay.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationFrom />} />
          <Route path="loginForm" element={<LoginForm />} />
          <Route path="userDetailsDisplay" element={<UserDetailsDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
