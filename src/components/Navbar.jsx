import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/#top"
            className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
            smooth
          >
            Elif Onem
          </Link>
        </motion.div>

        <ul className="flex gap-6 text-gray-700">
          <li>
            <Link to="/#about" className="hover:text-blue-600 transition-colors" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="/#projects" className="hover:text-blue-600 transition-colors" smooth>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="hover:text-blue-600 transition-colors" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
