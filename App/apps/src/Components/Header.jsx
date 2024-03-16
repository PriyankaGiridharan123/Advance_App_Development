import React from 'react';
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="site-header">
    <div className='header-container'>
      <nav>
        <Link to="/"><strong>JOB SPARK |</strong></Link>
        <Link to="/applicantlogin">Applicant Login</Link>
        <Link to="#">About us</Link>
        <Link to="#">Contact Us</Link>
        <Link to="#">Support</Link>
        <Link to="/adminlogin">Admin Login</Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
