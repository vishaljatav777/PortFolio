import React from 'react';
import './Home.css';
// Make sure to place your profile picture in a folder like 'assets'
// and import it. For example:
import profilePic from '../assets/profile-picture.jpg';

function Home() {
  return (
    // The id="home" allows the "Home" link in your header to scroll here
    <section id="home" className="home-section">
      <div className="home-container">
        
        <div className="home-content">
          <h1>
            Hi, I'm <span className="highlight">Vishal Jatav</span>
          </h1>
          <h3>A Creative Web Developer</h3>
          <p>
            “Specialized in building exceptional and accessible digital experiences, with a focus on developing responsive full-stack web applications.”
          </p>
          <div className="home-cta">
            <a href="#project" className="cta-primary">View My Work</a>
            <a href="/Resume.pdf" className="cta-secondary" download>Download CV</a>
          </div>
        </div>

        <div className="home-image">
          {/* Add your profile picture here */}
          
          <div className="image-placeholder">
            <img src={profilePic} alt="VJ - Profile Picture" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;