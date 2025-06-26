import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-32" id="hero">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I’m <span className="text-blue-600">Elif</span> 👋
          <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">
            Frontend Developer & UI Enthusiast
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          I craft <span className="font-semibold">delightful digital experiences</span> with React, 
          blending clean code with pixel-perfect design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition"
          >
            Let’s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;