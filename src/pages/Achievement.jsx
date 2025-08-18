import React from 'react';
import './Achievement.css';
import { FaCertificate, FaTrophy, FaCode } from 'react-icons/fa'; // Example icons

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
  // {
  //   year: '2024',
  //   title: '1st Place - Smart India Hackathon',
  //   issuer: 'Ministry of Education',
  //   description: 'Led a team of four to develop a solution for urban waste management, winning the top prize in the sustainability category.',
  //   icon: <FaTrophy />,
  // },
  // {
  //   year: '2024',
  //   title: 'Open Source Contributor',
  //   issuer: 'GitHub',
  //   description: 'Contributed multiple pull requests to a popular open-source UI library, focusing on accessibility improvements.',
  //   icon: <FaCode />,
  // },
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
            
            {/* WRAP THE CARD WITH THE LINK TAG */}
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