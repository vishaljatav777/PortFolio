import React, { useRef, useEffect } from 'react';
import './Skill.css';
// Icons have been updated to include all your new skills
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiTailwindcss, SiTypescript, SiMysql, SiC } from 'react-icons/si';
import { BsDiagram3, BsCodeSlash } from 'react-icons/bs';
import { AiOutlineApartment } from 'react-icons/ai'; // <-- 1. ADDED THIS NEW IMPORT

// Your new, comprehensive list of skills
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="skill-icon c" /> },
      { name: "Java", icon: <FaJava className="skill-icon java" /> },
      { name: "JavaScript", icon: <FaJsSquare className="skill-icon js" /> },
      { name: "TypeScript", icon: <SiTypescript className="skill-icon typescript" /> },
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> },
      { name: "CSS3", icon: <FaCss3Alt className="skill-icon css" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <FaReact className="skill-icon react" /> },
      { name: "Node.js", icon: <FaNodeJs className="skill-icon node" /> },
      { name: "Express.js", icon: <SiExpress className="skill-icon express" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <DiMongodb className="skill-icon mongo" /> },
      { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
      { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
      { name: "Docker", icon: <FaDocker className="skill-icon docker" /> },
      { name: "REST API", icon: <BsCodeSlash className="skill-icon restapi" /> },
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", icon: <BsDiagram3 className="skill-icon ds" /> },
      // 2. REPLACED THE OLD BsSitemap ICON WITH THE NEW ONE
      { name: "OOP", icon: <AiOutlineApartment className="skill-icon oop" /> },
    ]
  }
];

function Skill() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.classList.add('section-hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.remove('section-hidden');
          section.classList.add('section-visible');
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skill" className="skill-section" ref={sectionRef}>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;