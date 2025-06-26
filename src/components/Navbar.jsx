import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Elif's Portfolio</h1>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;