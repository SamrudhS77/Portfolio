import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center p-10">
    <motion.h1 className="text-7xl font-extrabold tracking-tight drop-shadow-xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      Hi, I'm [Your Name]
    </motion.h1>
    <motion.p className="mt-6 text-2xl max-w-2xl font-light tracking-wide text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
      Data Scientist | Machine Learning | Analytics | Interactive Dashboards
    </motion.p>
    <motion.a
      href="#projects"
      className="mt-10 px-10 py-4 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold text-lg rounded-full shadow-2xl hover:scale-105 transition-transform"
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
  <section id="projects" className="p-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen">
    <h2 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
      My Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2 overflow-hidden p-8 border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="text-3xl font-bold text-teal-300 mb-2">{project.title}</h3>
          <p className="text-gray-400 text-lg">{project.description}</p>
          <p className="text-sm text-gray-500 mt-2 italic">Tech: {project.tech}</p>
          <iframe
            src={project.embedUrl}
            width="100%"
            height="300px"
            className="mt-6 border border-gray-700 rounded-lg shadow-md"
          ></iframe>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white text-center p-10">
    <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Let's Connect</h2>
    <div className="flex space-x-8 mt-10">
      <a href="mailto:your.email@example.com" className="text-cyan-400 hover:text-white transition-all text-4xl"><FaEnvelope /></a>
      <a href="https://linkedin.com/in/yourprofile" className="text-cyan-400 hover:text-white transition-all text-4xl"><FaLinkedin /></a>
      <a href="https://github.com/yourgithub" className="text-cyan-400 hover:text-white transition-all text-4xl"><FaGithub /></a>
    </div>
  </section>
);

const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;