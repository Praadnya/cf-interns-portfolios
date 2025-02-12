import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Jagadeesh = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/intern/Jagadeesh");
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
    <div className="min-h-screen w-full bg-gradient-to-tr from-gray-100 to-blue-50 flex justify-center items-center p-6">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Profile Header */}
        <div className="bg-gray-900 text-white p-10 text-center relative">
          <div className="absolute top-6 left-6 w-16 h-16 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
          <h1 className="text-3xl font-bold mt-4">{internData.name}</h1>
          <p className="text-gray-300 mt-1">{internData.email}</p>
          <p className="text-gray-300">{internData.phone}</p>
        </div>
  
        {/* Content Sections */}
        <div className="p-8 space-y-8">
          
          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {internData.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Tech Stack:</span> {project.techStack}
                  </p>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {internData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-700 mt-2">
                    {edu.startYear} - {edu.endYear} | <span className="font-medium">CGPA:</span> {edu.cgpa}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              Experiences
            </h2>
            <div className="space-y-4">
              {internData.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Company:</span> {exp.company}
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Duration:</span>{" "}
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {exp.currentJob
                      ? "Present"
                      : new Date(exp.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <div className="bg-gray-900 text-center text-white p-4 rounded-b-3xl">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Jagadeesh;