import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import "./index.css";
import NavBar from "./NavBar";

const Home = () => (
  <section id="home" className="home">
    <div className="home-abstract-shape"></div>
    <div className="home-glow-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Samrudh
      </motion.h1>
    </div>
    <motion.p className="home-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
      I’m a{' '}
      <span style={{ color: '#00bfa6', fontWeight: 'bold' }}>
        <Typewriter
          words={['Data Scientist', 'ML Engineer', 'Problem Solver', 'Smooth Operator']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </span>
    </motion.p>
    <div className="cta-buttons">
      <a href="#projects" className="home-button">
        ↓ See My Work
      </a>
      <a
        href="/SamrudhShetty_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        📄 View Resume
      </a>
    </div>
  </section>
);

const projects = [
  {
    title: "Highcharts Dashboard",
    description: "Interactive visualization built with Highcharts.",
    embedUrl: "https://your-highcharts-dashboard.com",
    tech: "JavaScript, Highcharts"
  },
  {
    title: "R Shiny Dashboard",
    description: "Data insights using R and Shiny.",
    embedUrl: "https://your-shiny-app.shinyapps.io/app-name",
    tech: "R, Shiny"
  },
  {
    title: "Python Dash App",
    description: "Machine learning model dashboard using Dash.",
    embedUrl: "https://your-dash-app.onrender.com",
    tech: "Python, Dash"
  }
];

const Projects = () => (
  <motion.section
    id="projects"
    className="projects"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h2 className="projects-title">My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-tech">Tech: {project.tech}</p>
          <iframe
            src={project.embedUrl}
            width="100%"
            height="300px"
            className="project-iframe"
          ></iframe>
        </motion.div>
      ))}
    </div>
  </motion.section>
);


const Contact = () => (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
    <h2 className="contact-title">Let's Connect</h2>
    <div className="contact-icons">
      <a href="mailto:samrudhshetty6@gmail.com" className="contact-icon"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/samrudhshetty/" className="contact-icon"><FaLinkedin /></a>
      <a href="https://github.com/SamrudhS77" className="contact-icon"><FaGithub /></a>
    </div>
  </motion.section>
);


const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="background-grid"></div>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;