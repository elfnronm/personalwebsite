import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
      title: "Big 2 Mobile Companion App",
    description:
      "An Android app that helps players track scores and rules for the Big 2 card game...",
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

const Projects = () => {
  return (
    <section className="bg-gray-50 py-20" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

            {project.link && (
             <Link
                 to={project.link}
                 className="text-blue-600 hover:underline font-medium"
                >
                    View Project
                </Link>
)}




            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
