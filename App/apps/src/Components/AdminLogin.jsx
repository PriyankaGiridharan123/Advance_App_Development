import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername.length === 0) {
      alert('Enter Username');
    } else if (trimmedPassword.length === 0) {
      alert('Enter Password');
    } else {
      alert("Logged in Successfully!!");
      nav('/admindashboard');
    }
  };

  return (
    <div id="body">
      <div className="login-form">
        <div className="containerr">
          <div className="header">
            <h1>Job Application Portal</h1>
            <p>Admin Login</p>
          </div>

          <form>
            <div className="input">
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input
              onClick={authenticate}
              className="login-button"
              type="submit"
              value="LOGIN"
            />
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
