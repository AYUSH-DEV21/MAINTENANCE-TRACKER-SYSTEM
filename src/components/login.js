import React, { useState } from 'react';
import './login.css'; 
import logo from "../assets/logo1.png"
import { useNavigate } from 'react-router-dom'

function Manlogin() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "ayush" && password === "ayush") 
    {
      navigate("/dashboard")
      alert("Success")
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <div className="logo">
            <img src={logo} alt="Tata Steel Logo"/>
        </div>
        <div className='welcome'>
          <h1 >Welcome to MTS</h1>
        </div>
      </div>
      <div className="blurry-background"></div>
      <div className="middle-content">
        <div className="center-box">
          <h2>Login</h2>
          <div className="login-container">
            <h3>Enter Your Credentials</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" id="username" placeholder="Username" required />
              </div>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  required
                />
                <div className="checkbox-label">
                  <input type="checkbox" id="showPassword" onClick={togglePasswordVisibility} />
                  Show Password
                </div>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manlogin;