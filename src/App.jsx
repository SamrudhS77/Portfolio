import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./index.css";

const Home = () => (
  <section className="home">
    <motion.h1 className="home-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      Hi, I'm [Your Name]
    </motion.h1>
    <motion.p className="home-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
      Data Scientist | Machine Learning | Analytics | Interactive Dashboards
    </motion.p>
    <motion.a
      href="#projects"
      className="home-button"
      whileHover={{ scale: 1.1 }}
    >
      Explore My Work
    </motion.a>
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
  <section id="projects" className="projects">
    <h2 className="projects-title">My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
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
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2 className="contact-title">Let's Connect</h2>
    <div className="contact-icons">
      <a href="mailto:samrudhshetty6@gmail.com" className="contact-icon"><FaEnvelope /></a>
      <a href="https://www.linkedin.com/in/samrudhshetty/" className="contact-icon"><FaLinkedin /></a>
      <a href="https://github.com/SamrudhS77" className="contact-icon"><FaGithub /></a>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="page-wrapper">
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;