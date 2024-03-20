import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();

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
      nav('/applicantdashboard')
    }
  };

  return (
    
    <div id="body" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-portrait-business-people_23-2150793953.jpg?t=st=1710836972~exp=1710840572~hmac=9ba9ea166ae8a797542eccc9ec7d255e687da50e0d56c72d68b4ccb8cb123c6b&w=1060')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="login-form">
        <div className="containerr">
          <div className="header">
            <h1>Job Application Portal</h1>
            <p>Applicant Login</p>
          </div>

          <form>
            <div className="input">
            <FaUser className="icon" />
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
            <FaEye className="icon"/>
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
          <Link to="/applicantsignup">
            <p>Don't have an account? Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
