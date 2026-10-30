import React from 'react';
import { achievementsData } from '../../data/achievementsData';
import './Achievements.css';

export function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">My Achievements</h2>

        <div className="achievements-timeline">
          {achievementsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="achievement-timeline-item">
                <div className="achievement-dot-container">
                  <div className="achievement-dot" aria-hidden="true"></div>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card-link"
                  aria-label={`View certificate for ${item.title}`}
                >
                  <div className="achievement-content-card">
                    <div className="achievement-header">
                      <span className="achievement-icon">
                        <Icon />
                      </span>
                      <h3 className="achievement-title">{item.title}</h3>
                    </div>

                    <p className="achievement-issuer">
                      {item.issuer} &bull; <span className="achievement-year">{item.year}</span>
                    </p>

                    <p className="achievement-description">{item.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
