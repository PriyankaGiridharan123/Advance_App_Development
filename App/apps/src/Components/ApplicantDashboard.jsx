import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserPlus, FaListAlt } from 'react-icons/fa'; 
import { AiOutlineLogout } from 'react-icons/ai'; 
import './ApplicantDashboard.css';

function ApplicantDashboard() {
    
const nav=useNavigate();
const jobApply=()=>{
    nav('/jobposting');
};

  return (
    <div>
      <div className='navbar'>
        <Link to='/' className='menu-bars'>
          <FaHome className='icon' />
        </Link>
        <div className='portal-name'>
          <span>JOB SPARK Portal</span>
        </div>
        <Link to='/jobpostings' className='menu-bars'>
          <FaUserPlus className='icon' />
          <span className='link-text'>Job Postings</span>
        </Link>
        <Link to='/viewapplications' className='menu-bars'>
          <FaListAlt className='icon' />
          <span className='link-text'>View Applications</span>
        </Link>
        <Link to='/' className='menu-bars'>
          <AiOutlineLogout className='icon' />
          <span className='link-text'>Logout</span>
        </Link>
      </div>
      <div className="image-container">
        <div className="image-item">
          <img src="https://img.freepik.com/free-vector/best-employees-rating_74855-4367.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="Image 1" />
        </div>
        <div className="image-item">
          <img src="https://img.freepik.com/premium-vector/concept-two-guys-are-choosing-candidate_701961-1770.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="Image 2" />
        </div>
        <div className="image-item">
          <img src="https://img.freepik.com/premium-vector/employment-agency-recruitment-placement-job-service-illustration_2175-5080.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="Image 3" />
        </div>
      </div>
      <div className="job-container">
        <div className="job-item">
          <h2>Marketing Manager</h2>
          <p>Qualification: Bachelor's degree</p>
          <p>Category: Full-time</p>
          <p>Location: Chennai</p>
          <p>Deadline: June 9, 2024</p>
          <p>Application Fee: 250</p>
          <button className="apply-button" onClick={jobApply}>Apply</button>
        </div>
        <div className="job-item">
          <h2>Software Developer</h2>
          <p>Qualification: Master's degree</p>
          <p>Category: Part-time</p>
          <p>Location: Chennai</p>
          <p>Deadline: July 28, 2024</p>
          <p>Application Fee: 150</p>
          <button className="apply-button" onClick={jobApply}>Apply</button>
        </div>
        <div className="job-item">
          <h2>UI/UX Developer</h2>
          <p>Qualification: High school diploma</p>
          <p>Category: Internship</p>
          <p>Location: Chennai</p>
          <p>Deadline: August 12, 2024</p>
          <p>Application Fee: Free</p>
          <button className="apply-button" onClick={jobApply}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default ApplicantDashboard;
