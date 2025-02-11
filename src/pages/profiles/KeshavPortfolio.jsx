import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Keshav = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
          <h1 className="text-4xl font-bold">{internData.name}</h1>
          <p className="text-lg mt-2">{internData.email}</p>
          <p className="text-lg">{internData.phone}</p>
        </div>

        {/* Projects Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internData.projects.map((project) => (
              <div key={project.id} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-2"><strong>Tech Stack:</strong> {project.techStack}</p>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {internData.education.map((edu) => (
              <div key={edu.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-600 mt-2">{edu.startYear} - {edu.endYear} | CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            {internData.experiences.map((exp) => (
              <div key={exp.id} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600 mt-2"><strong>Company:</strong> {exp.company}</p>
                <p className="text-gray-600 mt-2">
                  <strong>Duration:</strong> {new Date(exp.startDate).toLocaleDateString()} - 
                  {exp.currentJob ? " Present" : ` ${new Date(exp.endDate).toLocaleDateString()}`}
                </p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default Keshav;
