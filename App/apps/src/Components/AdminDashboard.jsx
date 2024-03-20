import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AdminSidebarData } from './AdminSideBar';
import './AdminDashboard.css';
import { IconContext } from 'react-icons';
import { BsFillPeopleFill, BsClock, BsBarChartSteps } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai'; 

function AdminDashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const pendingApplications = [
    { id: 1, applicantName: 'John Doe', appliedJob: 'Backend Developer' },
    { id: 2, applicantName: 'Jane Smith', appliedJob: 'Frontend Developer' },
    { id: 3, applicantName: 'Alex Johnson', appliedJob: 'Data Scientist' },
  ];

  const premiumUsers = [
    { id: 1, username: 'premiumuser1', email: 'premiumuser1@example.com' },
    { id: 2, username: 'premiumuser2', email: 'premiumuser2@example.com' },
    { id: 3, username: 'premiumuser3', email: 'premiumuser3@example.com' },
  ];

  const recentlyAppliedJobs = [
    { id: 1, applicantName: 'Priyanka', appliedJob: 'UI/UX Designer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'UI/UX Designer' },
    { id: 3, applicantName: 'Priyanka', appliedJob: 'FrontEnd Designer' },
    { id: 5, applicantName: 'Yasvanth', appliedJob: 'BackEnd Designer' },
    { id: 6, applicantName: 'Priyanka', appliedJob: 'Full Stack Developer' },
    { id: 8, applicantName: 'Yasvanth', appliedJob: 'Full Stack Developer' }
  ];

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div id="button">
            <div id="Log-sign">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span style={{ marginRight: "100px" }}><AiOutlineLogout className='icon' />Log out</span>
              </Link>
            </div>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {AdminSidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>Applicant Visited</h3>
              <BsFillPeopleFill className='card_icon' />
            </div>
            <h2>3000</h2>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Applicant Applied</h3>
              <BsFillPeopleFill className='card_icon' />
            </div>
            <h2>200</h2>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Peak Hours</h3>
              <BsClock className='card_icon' />
            </div>
            <h2>6pm to 10pm</h2>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Most Applying Job</h3>
              <BsBarChartSteps className='card_icon' />
            </div>
            <h2>Full Stack Developer</h2>
          </div>
        </div>

        <h1 className="welcome">Welcome, Admin!</h1><br></br>
        
        <div className="pending-applications">
          <h2>Pending Applications</h2>
          <ul>
            {pendingApplications.map(application => (
              <li key={application.id}>
                <span>Applicant Name: {application.applicantName}</span>
                <span>Applied Job: {application.appliedJob}</span>
              </li>
            ))}
          </ul>
        </div><br></br>

        <div className="premium-users">
          <h2>Premium Users</h2>
          <ul>
            {premiumUsers.map(user => (
              <li key={user.id}>
                <span>Username: {user.username}</span>
                <span>Email: {user.email}</span>
              </li>
            ))}
          </ul>
        </div><br></br>

        <div className="recently-applied-jobs">
          <h2>Recently Applied Jobs</h2>
          <ul>
            {recentlyAppliedJobs.map(job => (
              <li key={job.id}>
                <span>Applicant Name: {job.applicantName}</span>
                <span>Applied Job: {job.appliedJob}</span>
              </li>
            ))}
          </ul>
        </div>

      </IconContext.Provider>
    </>
  );
}

export default AdminDashboard;
