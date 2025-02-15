import React from 'react';
import { motion } from 'framer-motion';
import { SectionBorder } from '../common/SectionBorder';
import { SectionDecorator } from '../common/SectionDecorator';

export const Education = ({ education, containerVariants, cardVariants }) => (
  <motion.section 
    id="education" 
    className="relative max-w-6xl mx-auto pt-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <SectionBorder />
    <SectionDecorator title="Education" />
    <div className="space-y-8">
      {education?.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.05,
            rotateZ: 1,
            boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
          }}
        >
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
            {edu.institution}
          </h3>
          <p className="text-gray-500 mt-1">
            {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);