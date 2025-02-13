import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
    <motion.div 
      className="text-pink-200 text-xl"
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 360],
        borderRadius: ["20%", "50%", "20%"]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  </div>
);