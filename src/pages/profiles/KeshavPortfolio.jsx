import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Keshav = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/intern/Keshav");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setInternData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex justify-center items-center min-h-screen text-xl">Loading...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-red-500 text-xl">Error: {error}</div>;

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white shadow-2xl border border-gray-300">

        {/* Profile Header */}
        {!activeSection && (
          <div className="w-full py-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h1 className="text-6xl font-bold">{internData.name}</h1>
            <p className="text-2xl mt-3">{internData.email}</p>
            <p className="text-2xl">{internData.phone}</p>
            <div className="flex justify-center mt-8 space-x-8">
              <button onClick={() => setActiveSection("education")} className="px-8 py-4 bg-white text-gray-800 shadow-lg rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-100">
                Education
              </button>
              <button onClick={() => setActiveSection("projects")} className="px-8 py-4 bg-white text-gray-800 shadow-lg rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-100">
                Projects
              </button>
              <button onClick={() => setActiveSection("experience")} className="px-8 py-4 bg-white text-gray-800 shadow-lg rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-100">
                Experience
              </button>
            </div>
          </div>
        )}

        {/* Back Button */}
        {activeSection && (
          <div className="w-full p-6 bg-gray-100 flex justify-center">
            <button onClick={() => setActiveSection(null)} className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold text-lg transition duration-300 hover:bg-red-700">
              ← Back to Profile
            </button>
          </div>
        )}

        {/* Section Content */}
        <div className="w-full flex justify-center py-10">
          <div className="w-3/4 text-center">
            {activeSection === "education" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-3">Education</h2>
                {internData.education.map((edu) => (
                  <div key={edu.id} className="w-full p-6 bg-white rounded-lg shadow-lg text-xl mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-gray-600 mt-2">{edu.startYear} - {edu.endYear} | CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeSection === "projects" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-3">Projects</h2>
                {internData.projects.map((project) => (
                  <div key={project.id} className="w-full p-6 bg-gray-50 rounded-lg shadow-lg text-xl mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                    <p className="text-gray-600 mt-2"><strong>Tech Stack:</strong> {project.techStack}</p>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeSection === "experience" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-3">Experience</h2>
                {internData.experiences.map((exp) => (
                  <div key={exp.id} className="w-full p-6 bg-gray-50 rounded-lg shadow-lg text-xl mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600 mt-2"><strong>Company:</strong> {exp.company}</p>
                    <p className="text-gray-600 mt-2">
                      <strong>Duration:</strong> {new Date(exp.startDate).toLocaleDateString()} - 
                      {exp.currentJob ? " Present" : ` ${new Date(exp.endDate).toLocaleDateString()}`}
                    </p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="w-full py-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg">
          <p>&copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default Keshav;
