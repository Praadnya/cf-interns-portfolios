import React from 'react';
import { motion } from 'framer-motion';
import { SectionBorder } from '../common/SectionBorder';
import { SectionDecorator } from '../common/SectionDecorator';
import project1 from '/src/images/project1.jpg';
import project2 from '/src/images/project2.jpg';
import project3 from '/src/images/project3.jpg';
import project4 from '/src/images/project4.png';
// import harshita from '/src/assets/Harshita.jpg';
const projectImages = {
  "Shop Management System": project1,
  "AI-Powered Car Guide Website": project2,
  "Migrating Monolithic Application to Microservices Architecture": project3,
  "Blockchain-Based Decentralized Voting System": project4
};

export const Projects = ({ projects, containerVariants, projectCardVariants }) => (
  <motion.section 
    id="projects" 
    className="relative max-w-6xl mx-auto pt-20"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <SectionBorder />
    <SectionDecorator title="Projects" />
    <div className="grid md:grid-cols-2 gap-8 perspective-1000">
      {projects?.map((project, index) => (
        <motion.div
          key={index}
          className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
          variants={projectCardVariants}
          whileHover="hover"
        >
          <div className="relative z-10 space-y-4">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                src={projectImages[project.name] || "/images/default-project.jpg"}
                alt={project.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-400">{project.description}</p>
            <p className="text-gray-500">Tech Stack: {project.techStack}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-pink-900/5 to-purple-900/5 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
  </motion.div>
              ))}
    </div>
              </motion.section>
);