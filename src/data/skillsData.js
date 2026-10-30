import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaDocker, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { 
  SiExpress, 
  SiTailwindcss, 
  SiTypescript, 
  SiMysql, 
  SiC 
} from 'react-icons/si';
import { BsDiagram3, BsCodeSlash } from 'react-icons/bs';
import { AiOutlineApartment } from 'react-icons/ai';

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiC, className: "c" },
      { name: "Java", icon: FaJava, className: "java" },
      { name: "JavaScript", icon: FaJsSquare, className: "js" },
      { name: "TypeScript", icon: SiTypescript, className: "typescript" },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: FaHtml5, className: "html" },
      { name: "CSS3", icon: FaCss3Alt, className: "css" },
      { name: "Tailwind CSS", icon: SiTailwindcss, className: "tailwind" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: FaReact, className: "react" },
      { name: "Node.js", icon: FaNodeJs, className: "node" },
      { name: "Express.js", icon: SiExpress, className: "express" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: DiMongodb, className: "mongo" },
      { name: "MySQL", icon: SiMysql, className: "mysql" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, className: "git" },
      { name: "GitHub", icon: FaGithub, className: "github" },
      { name: "Docker", icon: FaDocker, className: "docker" },
      { name: "REST API", icon: BsCodeSlash, className: "restapi" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", icon: BsDiagram3, className: "ds" },
      { name: "OOP", icon: AiOutlineApartment, className: "oop" },
    ],
  },
];
