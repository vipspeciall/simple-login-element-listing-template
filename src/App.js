import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Devices from "./components/Devices";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [userToken, setUserToken] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {

          currentForm === "login" ? 
              <Login onFormSwitch={toggleForm} setUserToken = {setUserToken}/> : 
          currentForm === "register" ? 
              <Register onFormSwitch={toggleForm}/> : 
          currentForm === "loggedIn" ? <Devices userToken = {userToken}/> : {}
      
      }
    </div>
  );
  
}

export default App;
