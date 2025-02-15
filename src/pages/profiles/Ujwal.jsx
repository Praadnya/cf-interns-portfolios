import React, { useEffect, useState } from "react";

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
  if (!internData) return <div className="flex justify-center items-center min-h-screen">No data found.</div>;

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-teal-50 to-indigo-50 p-8">
      <div className="max-w-screen-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-teal-600 to-indigo-600 p-10 text-center  flex flex-col items-center gap-2">
        <p className="text-gray-200  ">{internData.email}</p>
        <p className="text-gray-200  ">{internData.email}</p>
          
          <p className="text-4xl font-extrabold text-white mt-80">{internData.name}</p>
          <p className="text-gray-200  ">{internData.email}</p>
          <p className="text-gray-300 ">{internData.phone}</p>
        </div>

        {/* Sections Wrapper */}
        <div className="p-10">
          {/* Projects Section */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-teal-500 pb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internData.projects?.length > 0 ? (
              internData.projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium text-teal-600">Tech Stack:</span> {project.techStack}
                  </p>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No projects available.</p>
            )}
          </div>

          {/* Education Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 border-b-4 border-teal-500 pb-2">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internData.education?.length > 0 ? (
              internData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 bg-white rounded-xl hover:shadow-md transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-700 mt-2">
                    {edu.startYear} - {edu.endYear} | CGPA:{" "}
                    <span className="font-medium text-teal-600">{edu.cgpa}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No education details available.</p>
            )}
          </div>

          {/* Experience Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6 border-b-4 border-teal-500 pb-2">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internData.experiences?.length > 0 ? (
              internData.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-shadow duration-300"
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
              ))
            ) : (
              <p className="text-gray-600">No experience details available.</p>
            )}
          </div>
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

export default Ujwal;