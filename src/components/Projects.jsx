import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Big 2 Mobile Companion",
    description: "An Android app for tracking scores in the Big 2 card game, featuring real-time updates and rule references.",
    tags: ["Android", "Mobile", "UX-UI Design"],
    link: "/projects/big2",
    accent: "bg-purple-100 text-purple-800"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with interactive maps and customizable alerts.",
    tags: ["React", "API Integration", "Tailwind CSS"],
    accent: "bg-blue-100 text-blue-800"
  },
  {
    title: "TaskMaster Pro",
    description: "A productivity app with drag-and-drop tasks, deadlines, and team collaboration.",
    tags: ["TypeScript", "Redux", "Firebase"],
    accent: "bg-green-100 text-green-800"
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-28" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Here’s a glimpse of what I’ve built. Each project taught me something new.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className={`h-2 ${project.accent}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link
                      to={project.link}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;