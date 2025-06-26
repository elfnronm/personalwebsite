import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold text-blue-600"
          whileHover={{ scale: 1.05 }}
        >
          Elif Onem
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4"
          >
            <ul className="space-y-4">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;