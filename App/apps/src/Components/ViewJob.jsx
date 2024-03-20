import React from 'react';
import './ViewJob.css';

const ViewJob = () => {
  return (
    <div className="view-job-container">
      <h1 className="job-heading">View Jobs</h1>
      <div className="job-container">
        <div className="premium-jobs">
          <h2 className="category-heading">Premium Jobs</h2>
          <div className="job-item">
            <h3>Marketing Manager</h3>
            <p>Qualification: Bachelor's degree</p>
            <p>Location: Chennai</p>
            <p>Deadline: June 9, 2024</p>
            <p>Application Fee: $250</p>
          </div>
          <div className="job-item">
            <h3>Software Developer</h3>
            <p>Qualification: Master's degree</p>
            <p>Location: Chennai</p>
            <p>Deadline: July 28, 2024</p>
            <p>Application Fee: $150</p>
          </div>
          <div className="job-item">
            <h3>Data Analyst</h3>
            <p>Qualification: Bachelor's degree</p>
            <p>Location: New York</p>
            <p>Deadline: September 15, 2024</p>
            <p>Application Fee: $200</p>
          </div>
        </div>
        <div className="free-jobs">
          <h2 className="category-heading">Free Jobs</h2>
          <div className="job-item">
            <h3>UI/UX Developer</h3>
            <p>Qualification: High school diploma</p>
            <p>Location: Chennai</p>
            <p>Deadline: August 12, 2024</p>
            <p>Application Fee: Free</p>
          </div>
          <div className="job-item">
            <h3>Graphic Designer</h3>
            <p>Qualification: Bachelor's degree</p>
            <p>Location: Los Angeles</p>
            <p>Deadline: October 20, 2024</p>
            <p>Application Fee: Free</p>
          </div>
          <div className="job-item">
            <h3>Frontend Developer</h3>
            <p>Qualification: Bachelor's degree</p>
            <p>Location: San Francisco</p>
            <p>Deadline: November 5, 2024</p>
            <p>Application Fee: Free</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewJob;
