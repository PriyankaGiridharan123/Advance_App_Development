import React from 'react';
import './ViewJob.css'; 

const ViewJob = () => {

  return (
    <div className="job-container">
      <div className="job-item">
        <h2>Marketing Manager</h2>
        <p>Qualification: Bachelor's degree</p>
        <p>Category: Full-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: June 9, 2024</p>
        <p>Application Fee: 250</p>
      </div>

      <div className="job-item">
        <h2>Software Developer</h2>
        <p>Qualification: Master's degree</p>
        <p>Category: Part-time</p>
        <p>Location: Chennai</p>
        <p>Deadline: July 28, 2024</p>
        <p>Application Fee: 150</p>
      </div>

      <div className="job-item">
        <h2>UI/UX Developer</h2>
        <p>Qualification: High school diploma</p>
        <p>Category: Internship</p>
        <p>Location: Chennai</p>
        <p>Deadline: August 12, 2024</p>
        <p>Application Fee: Free</p>
        
      </div>
    </div>
  );
}

export default ViewJob;
