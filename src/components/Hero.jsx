import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20" id="hero">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Elif 👋</h1>
        <p className="text-xl text-gray-700 mb-6">
          I'm a frontend developer passionate about building beautiful web apps with React.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
