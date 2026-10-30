import React from 'react';
import aboutPic from '../../assets/images/about-picture.png';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-container">
          <div className="about-image-wrapper">
            <div className="image-placeholder-about">
              <img src={aboutPic} alt="Vishal Jatav - About" className="about-img" />
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-subtitle">Who I Am</h3>
            <p>
              Hello! I am a passionate <strong>Full-Stack Web Developer</strong> with a strong foundation in computer science and hands-on experience in building responsive, accessible, and scalable web applications. Proficient in Java, JavaScript, React, Node.js, MySQL, and MongoDB, I enjoy creating efficient solutions that enhance user experiences.
            </p>
            <p>
              Currently pursuing my <strong>MCA at MANIT Bhopal</strong>, I am eager to apply my skills in real-world projects, collaborate with cross-functional teams, and continuously master emerging technologies. My goal is to contribute to innovative engineering solutions while growing as a professional software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

