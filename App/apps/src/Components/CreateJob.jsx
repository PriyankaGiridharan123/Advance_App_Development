import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateJob.css';

const CreateJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [qualification, setQualification] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('free');
  const [applicationFee, setApplicationFee] = useState('');

  const nav=useNavigate();
  const saveJob = (e) => {
    e.preventDefault();

    if (!jobTitle || !department || !location || !responsibility || !qualification || !deadline || !applicationFee) {
      alert("Please fill in all the fields");
      return;
    }
    alert("Job created successfully!");
    nav('/admindashboard');
  };

  return (
    <div className="create-job-container">
      <div className="form-group">
        <div className="container">
          <h1>Create a Job</h1>
          <p>Enter Job Details</p>
          <form onSubmit={saveJob}>
            <div className="input">
              <input
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Responsibility"
                value={responsibility}
                onChange={(e) => setResponsibility(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="date"
                placeholder="Deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="input">
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Application Fee"
                value={applicationFee}
                onChange={(e) => setApplicationFee(e.target.value)}
              />
            </div>
            <button className="create-btn" type="submit">Create Job</button>
            <Link to="/admindashboard">
              <button className="cancel-btn">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
