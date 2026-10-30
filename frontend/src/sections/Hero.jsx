import React from 'react';
import profilePic from '../assets/images/profile-picture.jpg';
import { Button } from '../components/common/Button';
import { RESUME_URL } from '../constants';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <span className="hero-greeting">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Vishal Jatav</span>
          </h1>
          <h2 className="hero-subtitle">A Creative Web Developer</h2>
          <p className="hero-description">
            Specialized in building exceptional and accessible digital experiences,
            with a focus on developing responsive full-stack web applications.
          </p>

          <div className="hero-cta">
            <Button variant="primary" href="#projects">
              View My Work
            </Button>
            <Button variant="secondary" href={RESUME_URL} download="Vishal_Jatav_Resume.pdf">
              Download CV
            </Button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-placeholder">
            <img src={profilePic} alt="Vishal Jatav - Profile" className="hero-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
