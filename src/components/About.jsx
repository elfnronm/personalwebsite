import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-28 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              I’m Elif, a Computer Science student with a passion for turning ideas into 
              <span className="font-semibold"> intuitive, performant, and beautiful</span> web applications.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                My toolkit includes <span className="bg-blue-100 px-2 py-1 rounded">React</span>,{" "}
                <span className="bg-blue-100 px-2 py-1 rounded">Tailwind CSS</span>, and{" "}
                <span className="bg-blue-100 px-2 py-1 rounded">TypeScript</span>.
              </p>
              <p className="text-gray-700">
                When I’m not coding, you’ll find me sketching UI ideas, playing strategy games, 
                or exploring new coffee shops ☕.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl shadow-inner border border-blue-200">
            <h3 className="font-bold text-xl text-blue-800 mb-4">My Principles</h3>
            <ul className="space-y-4">
              {[
                "Write code that's readable first, clever second",
                "Design for humans, not just browsers",
                "Optimize for joy of use",
                "Learn something new every day"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-600 text-white p-1 rounded-full mr-3">
                    ✓
                  </span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;