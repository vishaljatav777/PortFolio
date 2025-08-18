import React from 'react';
import './Experience.css';
import { MdWork } from 'react-icons/md'; // Work icon

// You can easily update your work experience here
const experienceData = [
  {
    title: 'Software Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Bhopal, MP',
    date: 'June 2024 - Present',
    description: [
      'Collaborated with the development team to design and implement new features for a client-facing web application using React and Node.js.',
      'Wrote and maintained unit tests, improving code coverage by 15%.',
      'Assisted in optimizing database queries, resulting in a 20% reduction in API response times.',
      'Participated in daily stand-ups and agile sprint planning sessions.',
    ],
  },
  {
    title: 'Web Development Trainee',
    company: 'Code Academy',
    location: 'Bhopal, MP',
    date: 'January 2024 - May 2024',
    description: [
      'Completed a comprehensive training program on the MERN stack.',
      'Developed several small-scale projects to solidify understanding of web development concepts.',
      'Learned best practices for version control with Git and GitHub.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-dot-container">
              <div className="experience-dot">
                <MdWork />
              </div>
            </div>
            <div className="experience-content-card">
              <h3>{job.title}</h3>
              <p className="experience-details">
                <span className="company-name">{job.company}</span> | {job.location}
              </p>
              <p className="experience-date">{job.date}</p>
              <ul className="experience-description">
                {job.description.map((point, i) => (
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

export default Experience;