import React from 'react';
import './Footer.css'; 
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube, BsTwitter, BsGithub } from 'react-icons/bs';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">privacy</a></li>
              <li><a href="#">policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
            <a className="text-white" href="https://instagram.com/">
            <BsInstagram className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://linkedin.com/">
            <BsLinkedin className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://www.youtube.com/">
            <BsYoutube className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://facebook.com/">
            <BsFacebook className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://twitter.com/">
            <BsTwitter className="text-white fs-4" />
          </a>
          <a className="text-white" href="https://twitter.com/">
            <BsGithub className="text-white fs-4" />
          </a>
            </div>
          </div>
        </div>
        <small>All content &copy;Unplugged Events. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
