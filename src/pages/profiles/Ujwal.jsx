import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Ujwal = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/intern/Ujwal Harish");
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
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-teal-50 to-indigo-50 p-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-600 p-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">{internData.name}</h1>
          <p className="text-gray-200 mt-1">{internData.email}</p>
          <p className="text-gray-300">{internData.phone}</p>
        </div>
  
        {/* Projects Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Projects
          </h2>
          {internData.projects.map((project) => (
            <div
              key={project.id}
              className="mb-6 p-6 bg-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-teal-600">Tech Stack:</span> {project.techStack}
              </p>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
  
        {/* Education Section */}
        <div className="p-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Education
          </h2>
          {internData.education.map((edu) => (
            <div
              key={edu.id}
              className="mb-6 p-6 bg-white rounded-xl hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
              <p className="text-gray-700 mt-2">
                {edu.startYear} - {edu.endYear} | CGPA:{" "}
                <span className="font-medium text-teal-600">{edu.cgpa}</span>
              </p>
            </div>
          ))}
        </div>
  
        {/* Experience Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Experience
          </h2>
          {internData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-6 p-6 bg-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-teal-600">Company:</span> {exp.company}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-teal-600">Duration:</span>{" "}
                {new Date(exp.startDate).toLocaleDateString()} -{" "}
                {exp.currentJob ? "Present" : new Date(exp.endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
  
        {/* Footer */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-600 p-6 text-center">
          <p className="text-white text-sm font-light">
            &copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );   
};

//reddis kafka

export default Ujwal;