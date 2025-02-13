import React, { useEffect, useState } from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

const Satvik = () => {
  const [loading, setLoading] = useState(false);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [projects, setProjects] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/intern/Satvik");
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      console.log("Fetched Data:", data);  // Debugging line to check data format

      setPersonalInfo({
        name: data.personalInfo?.name,
        bio: data.personalInfo?.bio,
        profileImage: data.personalInfo?.profileImage,
        resumeLink: data.personalInfo?.resumeLink,
        email: data.personalInfo?.email,  // Email from backend
        phone: data.personalInfo?.phone,  // Phone from backend
      });

      setProjects(data.projects);
      setExperiences(data.experiences);
    } catch (err) {
      setError(err.message || "Failed to fetch portfolio data");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen">
      <Header resumeLink={personalInfo?.resumeLink} />
      <PersonalInfo personalInfo={personalInfo} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Education />
    </div>
  );
};

export default Satvik;
