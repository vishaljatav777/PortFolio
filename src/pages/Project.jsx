import React, { useRef, useEffect } from 'react';
import './Project.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import calculatorImage from '../ProjectIMG/calculater.png';
import Portfolio from '../ProjectIMG/portfolio.png';
import Wheather from '../ProjectIMG/Wheather.png';
import Elearning from '../ProjectIMG/E-Learning.jpg';


// Add your project data here
const projectsData = [
  {
  image: calculatorImage,
  title: 'Simple Calculator',
  description: 'A functional web-based calculator built with HTML, CSS, and JavaScript, supporting basic arithmetic operations with a clean and intuitive UI.',
  tags: ['HTML', 'CSS', 'JavaScript'],
  liveLink: 'https://vishaljatav777.github.io/Calculator/',
  codeLink: 'https://github.com/vishaljatav777/Calculator',
},
  {
    image: Portfolio,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with React. Designed to be clean, modern, and fully responsive.',
    tags: ['React', 'CSS3', 'JavaScript'],
    liveLink: 'https://port-folio-pi-six.vercel.app/',
    codeLink: 'https://github.com/vishaljatav777/PortFolio.git',
  },
  {
  image: Wheather,
  title: 'React Weather App',
  description: 'A dynamic weather application built with React.js, integrating a weather API to display real-time temperature and conditions with responsive design.',
  tags: ['React.js', 'API', 'JavaScript'],
  liveLink: '#',
  codeLink: 'https://github.com/vishaljatav777/Weather-App.git',
},
{
  image: '',
  title: 'Realtime Board Sharing',
  description: 'A collaborative board-sharing platform built with the MERN stack and Socket.IO, enabling real-time canvas interactions and multi-user collaboration.',
  tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'],
  liveLink: '#',
  codeLink: '#',
},
{
  image: Elearning,
  title: 'E-learning Platform',
  description: 'A full-stack e-learning platform developed as a group project with React.js and MySQL, featuring course management, user authentication, and backend APIs.',
  tags: ['React.js', 'MySQL', 'Node.js', 'Express.js'],
  liveLink: '#',
  codeLink: '#',
},
  {
    image: '',
    title: 'Task Management App',
    description: 'A simple and intuitive task management application that allows users to create, update, and delete tasks. Built with vanilla JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveLink: '#',
    codeLink: '#',
  },
];

function Project() {
  const sectionRef = useRef(null);

  // This hook sets up the Intersection Observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Initially hide the section
    section.classList.add('section-hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.remove('section-hidden');
          section.classList.add('section-visible');
          observer.unobserve(section); // Stop observing after it's visible
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the section is visible
    });

    observer.observe(section);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    // This ref connects the logic above to this specific section element
    <section id="project" className="project-section" ref={sectionRef}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {project.image ? <img src={project.image} alt={project.title} /> : <div className="image-placeholder-proj"></div>}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;