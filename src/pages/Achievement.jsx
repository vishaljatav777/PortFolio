import React from 'react';
import './Achievement.css';
import { FaCertificate, FaTrophy, FaCode, FaCoins } from 'react-icons/fa'; // Example icons

// You can easily update your achievements here
const achievementsData = [
  {
    year: '2024',
    title: 'Flipkart GRiD 6.0',
    issuer: 'Flipkart',
    description: 'Earned a certificate for participation in Flipkart GRiD 6.0, showcasing problem-solving and technical skills in real-world challenges.',
    icon: <FaCertificate />,
    link: 'https://unstop.com/certificate-preview/9d352bce-07b9-4d33-89b4-1573c98f8db7'
  },
  {
    year: '2025',
    title: 'Tough Tongue AI',
    issuer: 'Tough Tongue',
    description: 'This certificate provided by Tough Tongue AI is proof of the sheer grit, hard work, & dedication of the participant through which he/she has participated in the Consulting Quiz – Tough Tongue AI (Best Mock Interview Platform). Unstop congratulates them on achieving yet another milestone.',
    icon: <FaCertificate />,
    link: 'https://unstop.com/certificate-preview/1fd265e8-ee35-429a-8af0-b1dd6b0727ef'
  },
  {
    year: '2025',
    title: 'Google Cloud Arcade',
    issuer: 'Google cloud',
    description: 'I am getting a multiple badges from google cloud Arcade.',
    icon: <FaCoins />, // <-- FIX: Replaced the incorrect FaBedges icon
    link: 'https://www.cloudskillsboost.google/public_profiles/1d6231f9-0092-4ce0-930c-16e553e6dbaa'
  },
];

function Achievement() {
  return (
    <section id="achievement" className="achievement-section">
      <h2 className="section-title">My Achievements</h2>
      <div className="timeline">
        {achievementsData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot-container">
              <div className="timeline-dot"></div>
            </div>
            
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
              <div className="timeline-content-card">
                <div className="timeline-header">
                  <span className="timeline-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p className="timeline-issuer">{item.issuer} - <span className="timeline-year">{item.year}</span></p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}
export default Achievement;