import React from 'react';
import { motion } from 'framer-motion';

export const Navigation = ({ scrollToSection }) => (
  <motion.nav 
    className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <motion.div 
      className="bg-black/50 shadow-lg backdrop-blur-sm rounded-full flex gap-2 p-1 border border-pink-950/30"
      whileHover={{ scale: 1.02 }}
    >
      {['education', 'projects', 'experience', 'contact'].map((section) => (
        <motion.button
          key={section}
          onClick={() => scrollToSection(section)}
          className="px-6 py-2 text-gray-400 hover:text-pink-200 hover:bg-black/50 rounded-full transition-all capitalize text-sm"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(190, 24, 93, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {section}
        </motion.button>
      ))}
    </motion.div>
  </motion.nav>
);