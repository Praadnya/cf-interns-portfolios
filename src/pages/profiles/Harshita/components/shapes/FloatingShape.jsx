import React from 'react';
import { motion } from 'framer-motion';

export const FloatingShape = ({ className, animationProps }) => (
  <motion.div
    className={`absolute rounded-2xl bg-gradient-to-r ${className}`}
    animate={animationProps}
    transition={{
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  />
);