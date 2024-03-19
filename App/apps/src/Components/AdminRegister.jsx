import React, { useState } from 'react';
import validator from 'validator';
import './Login.css';
import { Link } from 'react-router-dom';

const AdminRegister= () => {
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [role, setRole] = useState('');

  const handleDetails = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedAge = age.trim();
    const trimmedPassword = password.trim();
    const trimmedConPassword = conpassword.trim();
    
    if (
      trimmedAge.length === 0 ||
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
    } else if (trimmedAge < 18 || trimmedAge > 65) {
      alert('Enter Correct Age!');
    } else if (trimmedPassword !== trimmedConPassword) {
      alert('Password And Confirm Password Must be the same!');
    } else {
      alert('Registered Successfully!!');
      
    }
  };

  return (
    <div id="body">
      <div className="signup-form">
        <div className="containerr">
          <div className="header">
            <h1>Register as Admin</h1>
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
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </div>
            <div className="input">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="applicant">Applicant</option>
              </select>
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
          <Link to="/adminlogin">
            <p>Already have an account? Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;