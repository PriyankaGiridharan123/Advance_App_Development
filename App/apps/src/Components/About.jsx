import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>ABOUT JOB SPARK</h1>
      <p>
        Job Spark is an innovative online job application portal that connects job seekers with 
        employers in an efficient and user-friendly manner. Our platform offers a wide range of 
        job opportunities across various industries, providing both job seekers and employers 
        with the tools they need to succeed.
      </p>
      <p>
        At Job Spark, we believe in simplifying the job search process by providing a streamlined 
        platform where users can easily search for and apply to jobs, and employers can efficiently 
        manage their hiring needs. Whether you're looking for your next career move or seeking 
        talented individuals to join your team, Job Spark is here to help you succeed.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission at Job Spark is to bridge the gap between job seekers and employers by 
        providing a reliable and efficient platform for job search and recruitment. We strive 
        to empower individuals to find meaningful employment opportunities and assist companies 
        in hiring top talent that aligns with their business needs.
      </p>
      <div className="image-grid">
        <img src="https://img.freepik.com/free-vector/best-employees-rating_74855-4367.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="Image 1" />
        <img src="https://img.freepik.com/premium-vector/job-interview-online-service-platform-candidate-hr-manager-business-man-woman-table-vector-illustration-conversation-career-human-resource-concept_2175-919.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="Image 2" />
      </div>
      <h2>Key Features</h2>
      <ul>
        <li>Advanced job search filters for targeted results</li>
        <li>Resume builder and profile customization tools</li>
        <li>Instant notifications for new job postings</li>
        <li>Secure messaging system for communication between candidates and employers</li>
        <li>Analytics dashboard for employers to track recruitment metrics</li>
      </ul>

      <h2>Benefits for Job Seekers</h2>
      <ul>
        <li>Access to a diverse range of job opportunities</li>
        <li>User-friendly interface for easy job search and application</li>
        <li>Personalized job recommendations based on preferences and skills</li>
        <li>Ability to showcase skills and experience through customizable profiles</li>
        <li>Direct communication with potential employers</li>
      </ul>

      <h2>Benefits for Employers</h2>
      <ul>
        <li>Efficient recruitment process with targeted job postings</li>
        <li>Access to a pool of qualified candidates</li>
        <li>Streamlined candidate management tools</li>
        <li>Increased visibility through employer branding options</li>
        <li>Analytics and reporting features for data-driven hiring decisions</li>
      </ul>

      <Link to="/" className="return-home-button">Return to Home</Link>
    </div>
  );
}

export default About;
