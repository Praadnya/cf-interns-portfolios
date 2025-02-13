import React from 'react';
import { motion } from 'framer-motion';
import { SectionBorder } from '../common/SectionBorder';
import { SectionDecorator } from '../common/SectionDecorator';

export const Experience = ({ experiences, containerVariants, cardVariants }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <motion.section 
      id="experience" 
      className="relative max-w-6xl mx-auto pt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionBorder />
      <SectionDecorator title="Experience" />
      <div className="space-y-8">
        {experiences?.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              rotateX: 2,
              boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
            }}
          >
            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
              {exp.title}
            </h3>
            <p className="text-gray-500 mt-1">
              {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
            </p>
            <p className="text-gray-400 mt-4">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};