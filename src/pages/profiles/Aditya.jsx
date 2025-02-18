import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, ExternalLink, Calendar, Building, GraduationCap, Loader } from 'lucide-react';
import profilePic from "../../assets/aditya-profile.jpg"; 


// Custom Card Components
const Card = ({ children, className }) => (
  <div className={`rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-white/10">
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h2 className={`text-2xl font-bold ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const ColorfulPortfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('http://localhost:8080/intern/Aditya Sharma');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="text-white text-center">
          <Loader className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-xl">Loading your awesome portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="text-red-600 text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-xl shadow-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-white relative z-10"
      />
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      <div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-2 text-center md:text-left">
          {data.name}
        </h1>
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="flex items-center gap-2 hover:text-pink-600 transition-colors">
            <Phone className="w-4 h-4" />
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1m3cyuS3E9X781c0PT6M1HW-ahAPKJwxn/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 inline-block px-6 py-2 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-md hover:scale-105 transform transition duration-300 rounded-3xl"
      >
        Resume
      </a>
    </div>
  </div>
</div>

        {/* Experience Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-6 h-6" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-30 transition-all">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-lg text-blue-100">{exp.company}</p>
                  <div className="flex items-center gap-2 text-blue-100 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}</span>
                  </div>
                  <p className="text-blue-50">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="w-6 h-6" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-30 transition-all">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-blue-50 mb-4">{project.description}</p>
                  <div className="bg-white bg-opacity-30 rounded-lg p-3">
                    <p className="text-sm text-white">{project.techStack}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="bg-gradient-to-r from-pink-500 to-red-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {data.education.map((edu) => (
                <div key={edu.id} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-30 transition-all flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-pink-100">{edu.startYear} - {edu.endYear}</p>
                  </div>
                  <div className="bg-white bg-opacity-30 rounded-lg px-3 py-1">
                    <p className="text-white">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ColorfulPortfolio;