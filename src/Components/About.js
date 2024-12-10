import React from 'react';
import './About.css';
import { GrReactjs } from 'react-icons/gr';
import { FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Marklogic_Logo from '../Assets/marklogic_logo.jpg'; // Replace with the actual path

const projectData = [
  {
    logo: '/cvs_logo.jpeg',
    title: 'Eservice_AD_2.0 (Cognizant)',
    description:
      'Developed scalable web applications using React.js for frontend and Mark Logic at the Database and had a good knowledge in services like Octopus, Jenkins, Eclipse, and Postman.',
  },
  {
    logo: '/j99_logo.png',
    title: 'J99 Recruitment Services Pvt Ltd (Freelance)',
    description:
      'Built a responsive recruitment platform, optimizing UI/UX design and backend integration for efficiency.',
  },
  {
    logo: '/anbukkarangal-logo.jpg',
    title: 'Anbukkarangal Charity (Freelance)',
    description:
      'Designed a dynamic, user-friendly website showcasing the charity’s mission and initiatives.',
  },
];

const technologies = [
  { name: 'React.js', icon: <GrReactjs />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <BiLogoTypescript />, color: '#3178C6' },
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  {
    name: 'MarkLogic',
    icon: <img src={Marklogic_Logo} alt="MarkLogic Logo" className="tech-logo" />,
    color: 'inherit',
  },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Professional Summary Section */}
      <div className="section professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Developer with nearly 3 years of experience in building responsive web applications, specializing in React JS
          and Node JS. Proficient in JavaScript and TypeScript, with hands-on experience in data management and
          integration of machine learning solutions. Familiar with Python and Java for backend development and skilled
          in No SQL for databases like MarkLogic and MongoDB interactions. Adept at collaborating in agile teams and
          committed to delivering high-quality software solutions across diverse industries...
        </p>
      </div>

      {/* Projects Section */}
      <div className="section projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projectData.map((project, index) => (
            <div key={index} className="card">
              <img src={project.logo} alt={project.title} className="project-logo" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="section technologies">
        <h2>Technologies</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item" style={{ color: tech.color }}>
              <span className='icons'>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
