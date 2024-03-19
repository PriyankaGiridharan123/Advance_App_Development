import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './JobPosting.css';

const JobPosting = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const nav=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !contactNumber || !email || !amount || !jobTitle) {
      alert("Please fill in all the fields");
      return;
    }

    alert("Form submitted successfully!");
    nav('/payment');
  };

  return (
    <div className="job-posting-container">
      <h1>Apply for Job Posting</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            placeholder="Enter the job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit Application</button>
          <Link to="/" className="cancel-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default JobPosting;
