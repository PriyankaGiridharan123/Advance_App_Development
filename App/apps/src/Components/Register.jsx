import React, { useState } from 'react';
import validator from 'validator';
import './Login.css';
import { Link } from 'react-router-dom';

const UserRegister= () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');

  const handleDetails = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedPassword = password.trim();
    const trimmedConPassword = conpassword.trim();

    if (
      trimmedEmail.length === 0 ||
      trimmedPassword.length === 0 ||
      trimmedUsername.length === 0 ||
      trimmedPhone.length === 0
    ) {
      alert('Enter All fields');
    } else if (!validator.isEmail(trimmedEmail)) {
      alert('Enter Valid Email!');
    } else if (trimmedPhone.length < 10) {
      alert('Enter Correct Phone Number!');
    } else if (trimmedPassword !== trimmedConPassword) {
      alert('Password And Confirm Password Must be the same!');
    } else {
      alert('Registered Successfully!!'); 
    }
  };

  return (
    <div id="body" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-portrait-business-people_23-2150793953.jpg?t=st=1710836972~exp=1710840572~hmac=9ba9ea166ae8a797542eccc9ec7d255e687da50e0d56c72d68b4ccb8cb123c6b&w=1060')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="signup-form">
        <div className="containerr">
          <div className="header">
            <h1>Register an Account</h1>
            <p>Get started!</p>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                pattern="[0-9]+"
                maxLength="10"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>

            <input
              className="login-button"
              onClick={handleDetails}
              type="submit"
              value="SIGN UP"
            />
          </form>
          <Link to="/applicantlogin">
            <p>Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;