import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserJobPosting.css';

function UserJobPosting() {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/jobposting');
  };

  return (
    <div>
    <h1>Available Job Postings</h1><br></br>
    <div className="jobb-container">
      <div className="jobb-item">
        <h2>Marketing Manager</h2>
        <p>Qualification: Bachelor's degree</p>
        <p>Category: Full-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: June 9, 2024</p>
        <p>Application Fee: 250</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
      
      <div className="jobb-item">
        <h2>Software Developer</h2>
        <p>Qualification: Master's degree</p>
        <p>Category: Part-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: July 28, 2024</p>
        <p>Application Fee: 150</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
      
      <div className="jobb-item">
        <h2>UI/UX Developer</h2>
        <p>Qualification: High school diploma</p>
        <p>Category: Internship</p>
        <p>Location: Chennai</p>
        <p>Deadline: August 12, 2024</p>
        <p>Application Fee: Free</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
      <div className="jobb-item">
        <h2>Marketing Manager</h2>
        <p>Qualification: Bachelor's degree</p>
        <p>Category: Full-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: June 9, 2024</p>
        <p>Application Fee: 250</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
      
      <div className="jobb-item">
        <h2>Software Developer</h2>
        <p>Qualification: Master's degree</p>
        <p>Category: Part-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: July 28, 2024</p>
        <p>Application Fee: 150</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
      
      <div className="jobb-item">
        <h2>UI/UX Developer</h2>
        <p>Qualification: High school diploma</p>
        <p>Category: Internship</p>
        <p>Location: Chennai</p>
        <p>Deadline: August 12, 2024</p>
        <p>Application Fee: Free</p>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
    </div>
    </div>
  );
}

export default UserJobPosting;
