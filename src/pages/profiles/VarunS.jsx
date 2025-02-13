import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, GraduationCap, Code, Mail, Phone } from "lucide-react";
import varunImage from '../../assets/varuns.jpg'; // Make sure path is correct

const VarunS = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/intern/Varun S");
        if (!response.ok) throw new Error("Failed to fetch data");
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
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
        {/* Back Button */}
        <Link to="/" className="absolute top-4 left-4 z-10">
          <button className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Interns
          </button>
        </Link>

        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 pt-16 text-center">
        <div className="mt-4 flex justify-center">
            <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={varunImage}
                alt="Varun S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mt-6 mb-4 animate-fade-in">
            {internData.name}
          </h1>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center text-blue-100">
              <Mail className="h-5 w-5 mr-2" />
              {internData.email}
            </div>
            <div className="flex items-center text-blue-100">
              <Phone className="h-5 w-5 mr-2" />
              {internData.phone}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-12">
          {/* Projects Section */}
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Code className="h-8 w-8 mr-3 text-purple-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="space-y-6">
              {internData.projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border-l-4 border-purple-600 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            {internData.education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.institution}
                </h3>
                <div className="mt-3 flex items-center text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {edu.startYear} - {edu.endYear}
                  </span>
                  <span className="mx-4">|</span>
                  <span className="font-medium">CGPA: {edu.cgpa}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Experience Section */}
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Briefcase className="h-8 w-8 mr-3 text-green-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="space-y-6">
              {internData.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 bg-white rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h3>
                  <div className="mt-2 flex items-center text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">
                      {new Date(exp.startDate).toLocaleDateString()} -{" "}
                      {exp.currentJob
                        ? "Present"
                        : new Date(exp.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <p className="text-white/90 text-sm">
            &copy; {new Date().getFullYear()} Cars24 CFSPL. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VarunS;