import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-social">
          <a href="https://github.com/vishaljatav777" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/vishal-jatav-722147283" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/VishalJatav77" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} VJ. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;