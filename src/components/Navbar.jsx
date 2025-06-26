import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Elif Onem
          </Link>
        </motion.div>
        
        <ul className="flex gap-6 text-gray-700">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;