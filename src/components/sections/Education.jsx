import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { educationData } from '../../data/educationData';
import './Education.css';

export function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-dot-container">
                <div className="education-dot" aria-hidden="true">
                  <FaGraduationCap />
                </div>
              </div>

              <div className="education-content-card">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-date">{edu.date}</span>
                <ul className="education-description">
                  {edu.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

