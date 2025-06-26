import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const [loadingProject, setLoadingProject] = useState(null);

  const projects = [
    {
      title: "Big 2 Mobile Companion App",
      description: "An Android app that helps players track scores and rules for the Big 2 card game.",
      link: "/projects/big2",
    },
    {
      title: "Weather App",
      description: "Simple app that shows weather using an external API.",
    },
    {
      title: "To-Do List",
      description: "Task manager with local storage using React Hooks.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        
        {/* Loading Overlay */}
        {loadingProject && (
          <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-700">Loading {loadingProject}...</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {project.link && (
                <Link
                  to={project.link}
                  onClick={() => setLoadingProject(project.title)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;