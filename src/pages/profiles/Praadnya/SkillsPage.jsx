import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const SkillsPage = () => {
  const skills = {
    "Languages": ["Python", "PySpark", "R", "Java", "JavaScript", "HTML"],
    "Technologies": ["FastAPI", "Streamlit", "Prisma", "Spring Boot", "ReactJS", "Tailwind"],
    "Databases & Tools": ["MySQL", "MongoDB", "Docker", "VS Code", "GitHub"],
    "Domains": ["NLP", "AI", "ML", "Data Analytics"],
    "Soft Skills": ["Teamwork", "Communication", "Problem-solving", "Adaptability"]
  };

  const achievements = [
    {
      title: "MRD Scholarship (x6)",
      description: "Top 25% of students"
    },
    {
      title: "Lake Conference",
      description: "2nd place in paper presentation"
    }
  ];

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
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-40 h-40 bg-[#d4b595] opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-32 h-32 bg-[#8b7355] opacity-10 rounded-lg"
          />
        </div>

        <div className="relative h-full flex flex-col items-center p-6">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-serif text-[#5c4934] mb-6"
          >
            Skills & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
            {/* Skills Section - Left Column */}
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(skills).slice(0, 3).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#fff9f0] p-4 rounded-lg shadow-lg h-full"
                  >
                    <h3 className="text-lg font-serif text-[#5c4934] mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="bg-[#d4b595] px-2 py-1 rounded-full text-[#fff9f0] text-xs"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Skills and Achievements - Right Column */}
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(skills).slice(3).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * (index + 3) }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#fff9f0] p-4 rounded-lg shadow-lg h-full"
                  >
                    <h3 className="text-lg font-serif text-[#5c4934] mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="bg-[#d4b595] px-2 py-1 rounded-full text-[#fff9f0] text-xs"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Achievements Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#fff9f0] p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg font-serif text-[#5c4934] mb-2">Achievements</h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f5e6d3] p-2 rounded"
                      >
                        <p className="text-[#5c4934] text-sm font-medium">{achievement.title}</p>
                        <p className="text-[#8b7355] text-xs">{achievement.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillsPage;