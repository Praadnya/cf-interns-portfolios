import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Import company images
import intelImage from '../../../assets/Praadnya/company-1.jpeg'
import infosysImage from '../../../assets/Praadnya/company-2.jpeg';
import iiscImage from '../../../assets/Praadnya/company-3.jpeg';

const getCompanyImage = (company) => {
  const imageMap = {
    'Intel': intelImage,
    'Infosys': infosysImage,
    'Indian Institute of Science': iiscImage
  };
  return imageMap[company] || '';
};

const ExperiencePage = ({ experiences }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-40 h-40 bg-[#d4b595] opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-32 h-32 bg-[#8b7355] opacity-10 rounded-lg"
          />
        </div>

        <div className="relative h-full flex flex-col items-center p-8">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-serif text-[#5c4934] mb-8 md:mb-12"
          >
            Experience
          </motion.h2>

          <div className="flex flex-nowrap overflow-x-auto gap-6 w-full px-4 pb-4 no-scrollbar">
            {experiences?.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ x: 100 * index, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="flex-none w-[300px] md:w-[400px]"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#fff9f0] p-6 rounded-lg shadow-lg h-full"
                >
                  {/* Company Image */}
                  <motion.div
                    animate={{ rotate: [-1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="mb-4 relative"
                  >
                    <div className="w-full h-40 rounded overflow-hidden">
                      <img
                        src={getCompanyImage(exp.company)}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Experience Details */}
                  <h3 className="text-xl font-serif text-[#5c4934] mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-[#8b7355] font-medium mb-2">{exp.title}</p>
                  <p className="text-[#5c4934] text-sm mb-3">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      year: 'numeric' 
                    })} - {new Date(exp.endDate).toLocaleDateString('en-US', { 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-[#8b7355] text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperiencePage;