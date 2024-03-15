import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    }
  };

  return (
    <div id="body">
      <div className="login-form">
        <div className="container">
          <div className="header">
            <h1>Job Application Portal</h1>
            <p>User Login</p>
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
          <Link to="/usersignup">
            <p>Don't have an account? Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
