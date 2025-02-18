import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import smritiImage from "../../assets/smritiraj.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fonts = ["font-serif", "font-sans", "font-mono", "font-light", "font-extrabold"];

const Portfolio = () => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 500);
    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { title: "Blockchain Music App", description: "NFT-based music platform enabling direct artist-to-fan sales with smart contract royalty distribution.", tech: ["Solidity", "React", "Web3.js", "IPFS"], image: "/resume/Blockchain.jpeg", bgColor: "bg-[#bae6fd]" },
    { title: "Customer Segmentation", description: "Marketing analysis tool using K-Means clustering for customer behavior analysis.", tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"], image: "/resume/Customerseg.png", bgColor: "bg-[#bbf7d0]" },
    { title: "Financial Dashboard", description: "Real-time financial analytics platform with Power BI and SQL integration.", tech: ["Power BI", "SQL", "DAX", "Python"], image: "/resume/Fincance.jpeg", bgColor: "bg-[#fed7aa]" }
  ];

  const experiences = [
    { role: "Software Engineer Intern", company: "Cuvasol Technologies", duration: "March 2024 - July 2024", description: "Worked on full-stack development, optimizing web applications and enhancing UI/UX features." }
  ];

  const education = [
    { degree: "Bachelor of Engineering in Computer Science", institution: "PES University", year: "2021 - 2025" }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6">
      {/* HEADER */}
      <header className="h-screen flex flex-col lg:flex-row items-center justify-center relative">
        <div className="text-left max-w-2xl mx-auto">
          <h1 className={`text-5xl transition-all duration-500 ${fonts[fontIndex]} mb-6 relative group`}> 
            <span className="relative">
              Smriti Raj
              <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </span>
          </h1>
          <p className="text-3xl leading-relaxed font-serif relative group">
            <span className="relative">
              I am a final-year engineering student passionate about web development, blockchain technology, and UI/UX design.I enjoy problem-solving , exploring new tech, and continuously improving my skills.
              <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </span>
          </p>
          <div className="flex gap-6 mt-6">
            <a href="/resume/smritiraj_resume.pdf" target="_blank" className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300">View Resume</a>
            <a href="/resume/smritiraj_resume.pdf" download className="px-8 py-3 border border-gray-900 text-white hover:bg-gray-800 transition-colors duration-300">Download Resume</a>
          </div>
          {/* CONTACT DETAILS */}
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="https://github.com/smritiraj528" target="_blank" className="hover:text-gray-400 transition-colors duration-300"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/smriti-raj-bb8bab278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-gray-400 transition-colors duration-300"><FaLinkedin /></a>
            <a href="mailto:smritiraj042@gmail.com.com" className="hover:text-gray-400 transition-colors duration-300"><FaEnvelope /></a>
          </div>
        </div>
        <motion.img src={smritiImage} alt="Smriti" className="w-80 h-96 object-cover mx-auto mt-8 lg:mt-0" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} />
      </header>

      {/* EDUCATION */}
      <section id="education" className="py-24">
        <h2 className="text-3xl font-light mb-12">Education</h2>
        {education.map((edu, index) => (
          <motion.div key={index} className="p-6 rounded-lg shadow-lg bg-[#fbcfe8]" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} viewport={{ once: true }}>
            <h3 className="text-xl font-medium">{edu.degree}</h3>
            <p className="text-sm font-light">{edu.institution} ({edu.year})</p>
          </motion.div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24">
        <h2 className="text-3xl font-light mb-12">Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div key={index} className="p-6 rounded-lg shadow-lg bg-[#d8b4fe] mb-6" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} viewport={{ once: true }}>
            <h3 className="text-xl font-medium">{exp.role}</h3>
            <p className="text-sm font-light">{exp.company} ({exp.duration})</p>
            <p className="mt-2 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl font-light mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} className={`p-6 rounded-lg shadow-lg ${project.bgColor} group hover:shadow-2xl transition-all duration-300`} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }} viewport={{ once: true }}>
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{project.title}</h3>
                <p className="mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (<span key={i} className="px-3 py-1 bg-gray-800 text-white text-sm">{tech}</span>))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
