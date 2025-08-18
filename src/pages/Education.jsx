import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa'; // Education icon

// You can easily update your education details here
const educationData = [
  {
    degree: 'Master of Computer Application',
    institution: 'Maulana Azad National Institute of Technology, Bhopal',
    date: '2023 - 2026',
    details: [
      // 'Current CGPA: 7.67/10',
      'Relevant Coursework: Data Structures & Algorithms, Web Development, Database Management Systems, Operating Systems.',
      // 'Member of the university\'s coding club and web development society.',
    ],
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'NSCB Govt. P.G. College, Biaora',
    date: '2019 - 2022',
    details: [
      // 'Current CGPA: 8.5/10',
      // 'Relevant Coursework: Data Structures & Algorithms, Web Development, Database Management Systems, Operating Systems.',
      // 'Member of the university\'s coding club and web development society.',
    ],
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-dot-container">
              <div className="education-dot">
                <FaGraduationCap />
              </div>
            </div>
            <div className="education-content-card">
              <h3>{edu.degree}</h3>
              <p className="education-details">
                <span className="institution-name">{edu.institution}</span>
              </p>
              <p className="education-date">{edu.date}</p>
              <ul className="education-description">
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;