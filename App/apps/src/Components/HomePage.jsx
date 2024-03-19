import React from 'react';
import Header from './Header';
import './HomePage.css';
import './Header.css';
import { Link } from "react-router-dom";
import Footer from './Footer';
import { FaSearch } from "react-icons/fa";
function Homee() {
  return (
    <div className="specific-div">
    <div className="wrapper">
    <div className="header-container"> 
    <Header />
  </div>
      <main>
        <div className="home-page">
          <div className="block">
            <h1>Hey Welcome to </h1>
            <h1>JOB SPARK - An online job application portal!</h1><br></br>
            <div className='content-container'>
          <div className="block-image">
            <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="An alt" className='right-image'/>
            <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="An alt" className='right-image'/>
          </div>
          </div>
            <p className="intro"><p>We're excited to welcome you to <strong>JOB SPARK</strong>, your premier destination for streamlining the job application process. Here at <strong>JOB SPARK</strong>, we're dedicated to simplifying the journey of finding and securing your dream job. 
            Are you prepared to embark on a seamless experience that will optimize your job search, refine your application process, and elevate your career prospects? You're in the right place to start! Whether you're a seasoned professional or just starting out in your career,    
            <strong> JOB SPARK</strong> offers an array of comprehensive tools and features to help you succeed in today's competitive job market. 
            Let's transform your career aspirations into reality. <em>Let's begin the journey together!</em></p></p>
            <Link to="/applicantsignup" className="button">SIGN UP FOR FREE!</Link>
          </div>

          <div className="search-container">
  <div className="search-wrapper">
    <input type="text" id="search-bar" placeholder="Search for job titles..." />
    <FaSearch className="searchIcon" />
  </div>
  <div className="suggestionss">
    <h1>Current Trending Jobs</h1>
    <span className="suggestion">Frontend Developer</span>
    <span className="suggestion">Backend Developer</span>
    <span className="suggestion">Full Stack Developer</span>
    <span className="suggestion">UI/UX Designer</span>
  </div>
</div>
        </div>
      </main>
  <Footer/>
    </div>
    </div>
  );
}

export default Homee;
