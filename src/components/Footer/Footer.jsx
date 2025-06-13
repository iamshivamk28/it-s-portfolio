import React from 'react';
import './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <h3>Shivam Khandare</h3>
          <p>Frontend Developer | Video Editor</p>
          <p>Email: <a href="mailto:khandareshivam28@gmail.com">khandareshivam28@gmail.com</a></p>
          <p>Phone: <a href="tel:+918605435288">+91 8605435288</a></p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/iamshivamk28" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shivam-khandare" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@your_youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shivam Khandare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
