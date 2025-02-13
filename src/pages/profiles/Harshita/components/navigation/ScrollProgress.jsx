import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div 
      className="fixed bottom-8 right-8 w-16 h-16 z-50"
      style={{ rotate: rotation }}
    >
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#3f3f46" strokeWidth="5" />
        <motion.circle
          cx="50" cy="50" r="45" fill="none" stroke="#be185d" strokeWidth="5"
          strokeDasharray="283"
          style={{
            strokeDashoffset: useTransform(scrollYProgress, [0, 1], [283, 0])
          }}
        />
      </svg>
    </motion.div>
  );
};
