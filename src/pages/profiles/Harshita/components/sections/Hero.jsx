import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import harshita from '/src/assets/Harshita.jpg';

export const Hero = ({ internData, descriptions, descriptionIndex, scrollToSection }) => (
  <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 1 }}
    >
      <motion.div
        className="w-64 h-64 md:w-96 md:h-96 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img 
          src={harshita} 
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-pink-500/30"
        />
        <div className="absolute inset-0 rounded-full border-2 border-pink-500/20 -m-2 animate-pulse" />
      </motion.div>

      <div className="flex flex-col items-center md:items-start space-y-6">
        <motion.h1 
          className="text-8xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 tracking-tight text-center md:text-left"
          animate={{ 
            backgroundPosition: ['0%', '100%'],
            filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          {internData?.name || 'Loading...'}
        </motion.h1>

        <motion.p 
          key={descriptionIndex}
          className="text-2xl text-gray-400 leading-relaxed font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {descriptions[descriptionIndex]}
        </motion.p>
      </div>
    </motion.div>

    <motion.button
      onClick={() => scrollToSection('education')}
      className="mt-12 inline-block"
      aria-label="Scroll to content"
      animate={{ 
        y: [0, 10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ChevronDown className="text-pink-300 hover:text-pink-200 transition-colors" size={36} />
    </motion.button>
  </section>
);