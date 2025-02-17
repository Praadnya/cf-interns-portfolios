import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, FileDown } from 'lucide-react';
import profile from '../../../assets/Praadnya/Praadnya.jpg'
import resume from '../../../assets/Praadnya/resume.pdf'

const CoverPage = ({ data }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0">
          {/* Original shapes with slight modifications */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#d4b595] opacity-20"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 -right-10 w-32 h-32 rounded-full bg-[#8b7355] opacity-10"
          />
          <motion.div 
            animate={{ 
              rotate: [0, -360],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-10 left-1/3 w-24 h-24 rounded-full bg-[#5c4934] opacity-15"
          />

          {/* New tech-themed shapes */}
          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#8b7355] opacity-20 transform rotate-45"
          />
          <motion.div
            animate={{
              rotate: [45, -45],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-[#d4b595] opacity-15"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-[#5c4934] transform rotate-12"
          />
          {/* Circuit-like lines */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-1/2 w-px h-32 bg-[#8b7355]"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-1/3 w-32 h-px bg-[#8b7355]"
          />
          {/* Dots pattern */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-[#5c4934] opacity-20" />
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full bg-[#5c4934] opacity-20" />
          {/* <div className="absolute top-1/2 right-1/2 w-2 h-2 rounded-full bg-[#5c4934] opacity-20" /> */}
        </div>

        <div className="relative h-full flex flex-col items-center justify-center p-12">
          <div className="relative">
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative z-10"
            >
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-48 h-48 rounded-lg overflow-hidden border-4 border-[#fff9f0] bg-[#8b7355]"
              >
                <img
                  src={profile}
                  alt="Praadnya H"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Name and Bio */}
          <div className="text-center mt-8 mb-6">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold text-[#5c4934] font-serif mb-4"
            >
              {data?.name}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[#8b7355] max-w-2xl mx-auto text-lg"
            >
              Welcome to my scrapbook of discovery! Fueled by a passion for GenAI, Data Analytics, AI, ML, and Web Development, I thrive on transforming ideas into innovative solutions. This journey is a reflection of my curiosity, creativity, and drive to solve real-world challenges—one project at a time.
            </motion.p>
          </div>

          {/* Contact Info and Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/praadnya-h/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#d4b595] px-4 py-2 rounded-full text-[#fff9f0]"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Praadnya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#d4b595] px-4 py-2 rounded-full text-[#fff9f0]"
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={resume}
                download="Praadnya_Resume.pdf"
                className="flex items-center gap-2 bg-[#d4b595] px-4 py-2 rounded-full text-[#fff9f0]"
              >
                <FileDown size={20} />
                <span>Resume</span>
              </motion.a>
            </div>
            <div className="flex gap-4 text-[#8b7355]">
              <motion.p whileHover={{ scale: 1.05 }}>{data?.email}</motion.p>
              <motion.p whileHover={{ scale: 1.05 }}>{data?.phone}</motion.p>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default CoverPage;