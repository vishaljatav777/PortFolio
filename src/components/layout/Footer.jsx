import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Vishal's ${item.name}`}
                className="social-icon-link"
              >
                <IconComponent />
              </a>
            );
          })}
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Vishal Jatav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
