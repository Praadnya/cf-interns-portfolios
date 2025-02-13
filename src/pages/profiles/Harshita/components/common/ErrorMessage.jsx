import React from 'react';
import { motion } from 'framer-motion';

export const ErrorMessage = ({ error }) => (
  <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
    <motion.div 
      className="text-pink-200 text-xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
    >
      Error: {error}
    </motion.div>
  </div>
);
