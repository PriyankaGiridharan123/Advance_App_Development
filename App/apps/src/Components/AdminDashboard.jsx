import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AdminSidebarData } from './AdminSideBar';
import './AdminDashboard.css';
import { IconContext } from 'react-icons';
// import JobForm from './CreateJob';

function AdminDashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const recentlyAppliedJobs = [
    { id: 1, applicantName: 'Priyanka', appliedJob: 'UI/UX Designer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'UI/UX Designer' },
    { id: 1, applicantName: 'Priyanka', appliedJob: 'FrontEnd Designer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'FrontEnd Designer' },
    { id: 1, applicantName: 'Priyanka', appliedJob: 'BackEnd Designer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'BackEnd Designer' },
    { id: 1, applicantName: 'Priyanka', appliedJob: 'Full Stack Developer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'Full Stack Developer' },
    
  ];
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: "white"}}/>
          </Link>
          <div id="button" style={{color:"white",fontSize:"21px"}}>
            <div id="Log-sign">
              <Link to="/" style={{textDecoration: "none"}}>
                <span style={{marginRight:"100px",color:"white"}}>Log out</span>
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
            {AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <br></br>
        <br></br>
        <br></br>
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
