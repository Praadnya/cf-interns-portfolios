import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import pesu from '../../../assets/Praadnya/pesu.jpeg'

const EducationPage = ({ education }) => {


  const coursework = [
    "OOPs concepts using Java",
    "Data Structures & Algorithms",
    "Full Stack Development",
    "Cloud Computing",
    "Data Analytics",
    "GenAI and Large Language Models"
  ];

  const hackathons = [
    "Kodikon: Built a website for safety of women!",
    "WEAL Hackathon: Built a website to help retired soldiers settle into society!"
  ]

  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-[#d4b595] opacity-10 rounded-lg"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-[#8b7355] opacity-10 rounded-full"
          />
        </div>

        <div className="relative h-full flex p-8">
          {/* Left Column - Main Education Info */}
          <div className="w-1/2 pr-8">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-serif text-[#5c4934] mb-8"
            >
              Education
            </motion.h2>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ rotate: [-2, 2] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="w-full bg-[#fff9f0] p-6 rounded-lg shadow-lg"
              >
                <div className="mb-6">
                  <img
                    src={pesu}
                    alt="PES University"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                {education?.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="text-2xl font-serif text-[#5c4934] mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-[#8b7355] mb-2">
                      {edu.startYear} - {edu.endYear}
                    </p>
                    <p className="text-[#5c4934] font-semibold mb-2">
                      B-Tech in Computer Science Engineering
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#d4b595] px-4 py-2 rounded-full inline-block"
                    >
                      <p className="text-[#fff9f0]">CGPA: {edu.cgpa}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="w-1/2 pl-8 space-y-6">         

            {/* Key Coursework */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-[#fff9f0] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-serif text-[#5c4934] mb-4">Key Coursework</h3>
              <div className="grid grid-cols-2 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#f5e6d3] p-2 rounded-lg text-center"
                  >
                    <p className="text-[#8b7355] text-sm">{course}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#fff9f0] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-serif text-[#5c4934] mb-4">Hackathons</h3>
              <div className="space-y-2">
                {hackathons.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#f5e6d3] p-3 rounded-lg"
                  >
                    <p className="text-[#8b7355]">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EducationPage;