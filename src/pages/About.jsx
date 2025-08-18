import React from 'react';
import './About.css';
import aboutPic from '../assets/about-picture.png'; 

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        
        <div className="about-image">
          
          <div className="image-placeholder-about">
            <img src={aboutPic} alt="A picture of VJ" />
          </div>
        </div>

        <div className="about-content">
          <h3>Who I Am</h3>
          <p>
            Hello again! I am a passionate Full-Stack Web Developer with a strong foundation in computer science and hands-on experience in building responsive, accessible, and scalable web applications. Proficient in Java, JavaScript, React, Node.js, MySQL, and MongoDB, I enjoy creating efficient solutions that enhance user experiences.
          </p>
          <p>
            Currently pursuing my MCA at NIT Bhopal, I am eager to apply my skills in real-world projects, collaborate with teams, and continuously learn emerging technologies. My goal is to contribute to innovative solutions while growing as a professional developer.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;