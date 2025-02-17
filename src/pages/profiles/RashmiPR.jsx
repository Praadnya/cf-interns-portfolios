import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import profileImage from '../../assets/rashmi.jpg'; 
import { Hand,UserCircle, Award, Star, Brain,Music,Film,User as Dance, Smile } from "lucide-react";
import {
  Code,
  User,
  Briefcase,
  Home,
  BookOpen
} from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [portfolioData, setPortfolioData] = useState({
    intern: null,
    loading: true,
    error: null
  });

  // Fetch portfolio data (intern info)
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const internResponse = await axios.get('http://localhost:8080/intern/Rashmi P R');
        setPortfolioData(prev => ({
          ...prev,
          intern: internResponse.data,
          loading: false
        }));
      } catch (err) {
        setPortfolioData(prev => ({
          ...prev,
          error: 'Error fetching data: ' + err.message,
          loading: false
        }));
      }
    };

    fetchPortfolioData();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Navigation button component (styled for sidebar)
  const NavLink = ({ page, icon, text }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 w-full
        ${currentPage === page 
          ? 'bg-blue-200 text-blue-900 shadow-md'
          : 'bg-white text-gray-600 hover:bg-blue-50'}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );

  // Home page content
  const HomePage = () => (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center p-4">
    <div className="flex items-center gap-6"> 
      {/* Large Hi Icon on the left */}
      <motion.span
        initial={{ rotate: -10 }}
        animate={{ rotate: 10 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.5 }}
      >
        <Hand className="text-blue-600 w-20 h-20" /> 
      </motion.span>

      {/* Main Content */}
      <h1 className="mt-6 text-7xl font-extrabold text-blue-600">Rashmi P R</h1>
    </div>
    
    <p className="mt-4 text-3xl text-gray-700">Welcome to my Profile page</p>
  </motion.div>
  );

//   // About page content
const AboutPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full p-8 bg-gradient-to-br from-blue-100 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading with Icon and Animated Underline */}
      <div className="relative flex items-center gap-4 mb-10">
        {/* Left Icon */}
        <UserCircle className="w-12 h-12 text-blue-700" />

        {/* Heading */}
        <div className="relative w-fit text-center">
          <h2 className="text-5xl font-extrabold text-blue-700">About Me</h2>
          <motion.div
            className="h-1 bg-blue-600 absolute left-0 bottom-[-10px]" // Moves underline lower
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <p className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center max-w-3xl leading-snug">
        Hi, I'm{" "}
        <span className="text-blue-600 font-bold animate-pulse">
          Rashmi P R
        </span>
        , a Computer Science and Engineering student at PES University.
      </p>

      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mt-4 text-center">
        Passionate about{" "}
        <span className="text-blue-500 italic">software development</span>,{" "}
        <span className="text-blue-500 italic">cybersecurity</span>, and{" "}
        <span className="text-blue-500 italic">data analysis</span>.
        Hands-on experience with{" "}
        <span className="text-blue-600 font-medium">Python</span>,{" "}
        <span className="text-blue-600 font-medium">Java</span>, and{" "}
        <span className="text-blue-600 font-medium">JavaScript</span>.
      </p>
    </motion.div>
  );
};

  // Experience page content
  const ExperiencePage = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/intern/Rashmi P R")
            .then((response) => {
                if (response.data?.experiences) {
                    setExperiences(response.data.experiences);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching experience data:", err);
                setError("Failed to load experience data.");
                setLoading(false);
            });
    }, []);

    const formatDate = (dateStr) => {
        if (!dateStr) return "N/A";
        const date = new Date(dateStr);
        return isNaN(date) ? "N/A" : date.toLocaleDateString();
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            {/* Heading with Icon and Underline Animation */}
            <div className="relative flex items-center gap-4 mb-6">
                {/* Left Icon */}
                <Briefcase className="w-12 h-12 text-blue-700" />

                {/* Heading */}
                <div className="relative w-fit">
                    <h2 className="text-4xl font-bold text-blue-600">Experience</h2>
                    <motion.div
                        className="absolute left-0 bottom-0 h-1 bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </div>

            {/* White Content Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-5xl">
                {loading && <p className="text-blue-600 text-xl text-center">Loading experience data...</p>}
                {error && <p className="text-red-500 text-xl text-center">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {experiences.length > 0 ? (
                        experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-gray-100 rounded-xl shadow-md border-l-4 border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                                <p className="text-blue-600 text-sm">{exp.company}</p>
                                <p className="text-gray-500 text-sm">
                                    {formatDate(exp.startDate)} - {exp.CurrentJob ? "Present" : formatDate(exp.endDate)}
                                </p>
                                <p className="mt-2 text-gray-700">{exp.description}</p>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-blue-600 text-xl text-center">No experience data available.</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

  // Projects page content
const ProjectsPage = () => {
    const [projectsFromDB, setProjectsFromDB] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/intern/Rashmi P R")
        .then((response) => {
          setProjectsFromDB(response.data.projects);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch project data.");
          setLoading(false);
        });
    }, []);
  
    const hardcodedProjects = [
      {
        title: "Examination Management System",
        description:
          "Built a Java-based system for managing examination activities. Used Swing for the frontend, and design patterns like strategy, proxy, and factory for result access and question creation.",
      },
      {
        title: "HEY-TAXII",
        description:
          "Developed a ride-sharing application using MySQL, Flask, and OpenStreetMap API. Users can book rides and estimate fares based on their current locations.",
      },
      {
        title: "Price Comparison Website",
        description:
          "Designed a price comparison site using Flask and web scraping to compare product prices from Amazon and Flipkart based on name or brand.",
      },
      {
        title: "Dance Academy Website",
        description:
          "Created a dynamic web platform for a dance academy using the MERN stack, featuring course details, faculty information, and a seamless registration system.",
      },
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
      hover: {
        scale: 1.05,
        borderColor: "#1E40AF",
        transition: { duration: 0.3 },
      },
    };
  
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-full p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading with Icon and Animated Underline */}
        <div className="relative w-fit mx-auto text-center mb-10 flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-blue-600" /> {/* Briefcase icon */}
          <h2 className="text-4xl font-bold text-blue-600">Projects</h2>
          <motion.div
            className="h-1 bg-blue-600 absolute left-0 bottom-[-10px]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
  
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hardcodedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg cursor-pointer border-2 border-transparent"
              variants={itemVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };


  // ExtracurricularPage page content
  const ExtracurricularPage = () => {
    const extracurriculars = [
      {
        title: "TERRATHON (2023)",
        description: "Developed an ML model for crop recommendations.",
      },
      {
        title: "ISFCR Hack-Attack (2023)",
        description: "Deep learning for crime detection.",
      },
    ];
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      hover: {
        scale: 1.05,
        borderColor: "#1E40AF",
        transition: { duration: 0.3 },
      },
    };
  
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen w-full p-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Heading with Icon and Animated Underline */}
        <div className="relative w-fit mx-auto text-center mb-10 flex items-center gap-2">
          <Award size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold text-blue-600">
            Extracurricular Activities
          </h2>
          <motion.div
            className="h-1 bg-blue-600 absolute left-0 bottom-[-10px]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
          />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {extracurriculars.map((activity, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg border-2 border-transparent cursor-pointer text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {activity.title}
              </h3>
              <p className="mt-2 text-gray-600">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  //HobbiesPage page content
  const HobbiesPage = () => {
    const hobbies = [
      { name: "Sudoku", icon: <Brain className="w-16 h-16 text-gray-700" /> },
      { name: "Dancing", icon: <Dance className="w-16 h-16 text-gray-700" /> },
      { name: "Music", icon: <Music className="w-16 h-16 text-gray-700" /> },
      { name: "Movies", icon: <Film className="w-16 h-16 text-gray-700" /> },
    ];
  
    return (
      <motion.div className="flex flex-col items-center justify-center min-h-screen p-6">
        {/* Page Heading with Animated Underline */}
        <h1 className="text-5xl font-extrabold text-blue-600 relative text-center">
          Hobbies
          <motion.div
            className="absolute left-0 bottom-[-10px] w-full h-1 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </h1>
  
        {/* Hobbies Content Box */}
        <div className="mt-12 w-full max-w-4xl flex flex-wrap justify-center gap-10">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl border-2 border-gray-300"
              whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5 } }}
            >
              {hobby.icon}
              <p className="text-lg font-semibold text-gray-700 mt-2">{hobby.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

 
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation with Profile Photo */}
      <nav className="flex flex-col items-center p-4 bg-white shadow-md w-72">
        {/* Profile Picture at the Top */}
        <div className="flex flex-col items-center mt-4 mb-6">
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg"
          />
          <h2 className="mt-3 text-xl font-bold text-gray-700">Rashmi P R</h2>
          <p className="text-sm text-gray-500">Software Developer</p>
        </div>
  
        {/* Navigation Links */}
        <div className="space-y-4 w-full">
          <NavLink page="home" icon={<Home className="w-5 h-5" />} text="Home" />
          <NavLink page="about" icon={<User className="w-5 h-5" />} text="About" />
          <NavLink page="experience" icon={<Briefcase className="w-5 h-5" />} text="Experience" />
          <NavLink page="projects" icon={<Code className="w-5 h-5" />} text="Projects" />
          <NavLink page="extracurricular" icon={<BookOpen className="w-5 h-5" />} text="Extracurricular" />
          <NavLink page="hobbies" icon={<Smile className="w-5 h-5" />} text="Hobbies" />  {/* <-- Added Hobbies */}
        </div>
      </nav>
      
      {/* Main Content Area */}
      <div className="flex-grow w-[1245px] flex items-center justify-center p-8 bg-light-blue">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'extracurricular' && <ExtracurricularPage />}
        {currentPage === 'hobbies' && <HobbiesPage />}  {/* <-- Added HobbiesPage */}
      </div>
    </div>
  );
  
};


export default Portfolio;
