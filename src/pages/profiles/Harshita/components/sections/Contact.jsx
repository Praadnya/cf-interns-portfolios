import React from 'react';
import { motion } from 'framer-motion';
import { SectionBorder } from '../common/SectionBorder';
import { SectionDecorator } from '../common/SectionDecorator';

export const Contact = ({ email, phone, containerVariants, cardVariants }) => (
  <motion.section 
    id="contact" 
    className="relative max-w-6xl mx-auto pt-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <SectionBorder />
    <SectionDecorator title="Contact Me" />
    <motion.div
      className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        rotateZ: -1,
        boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
      }}
    >
      <div className="space-y-4 text-gray-400">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </motion.div>
  </motion.section>
);