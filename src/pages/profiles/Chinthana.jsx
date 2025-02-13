import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import profileImage from '../../assets/Chinthana_home.jpeg';
import music from '../../assets/Chinthana_music.jpg';
import dance from '../../assets/Chinthana_Dance.mp4';
import about from '../../assets/Chinthana_about.jpg';
import {
  Code,
  User,
  Briefcase,
  Mail,
  Heart,
  Home,
  Github,
  Phone,
  Music,
  ArrowLeft
} from 'lucide-react';

const MainPortfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');



  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const internResponse = await axios.get('http://localhost:8080/intern/Chinthana M.J');
        setPortfolioData(prev => ({
          ...prev,
          intern: internResponse.data
        }));
        setLoading(false);
      } catch (err) {
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const NavLink = ({ page, icon, text }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300
        ${currentPage === page
          ? 'bg-purple-600 text-white'
          : 'hover:bg-purple-800 text-gray-300'}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );

  const HomePage = () => {
    const [intern, setIntern] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:8080/intern/Chinthana M.J") // Replace with your backend URL
        .then(response => setIntern(response.data))
        .catch(error => console.error("Error fetching intern data:", error));
    }, []);

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-full min-w-screen"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-6xl px-4"
          >
            {/* Profile Image */}
            <motion.img
              src={profileImage}
              alt="Profile"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-80 h-80 rounded-full border-4 border-purple-600 shadow-lg"
            />

            {/* Text Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Hello, Welcome to my portfolio
              </h1>

              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-4">
                I'm {intern ? intern.name : "Loading..."}
              </h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-2xl mt-4 text-gray-300"
              >
                [A Demo Project]
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      );
  };

  const AboutPage = () => {
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const imageVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
    };

    return (
      <motion.div
        className="flex gap-8 items-center"
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A highly motivated and enthusiastic software engineering student with a strong foundation in programming principles and a passion for developing innovative and user-friendly applications. Proficient in Java and Python with experience in web development, data structures and computer vision. Eager to learn new technologies and contribute to challenging projects, with a strong work ethic and a collaborative mindset.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={about}
          alt="About Me"
          className="w-96 h-96 rounded-lg shadow-xl"
          variants={imageVariants}
        />
      </motion.div>
    );
  };


  const ExperiencePage = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:8080/intern/Chinthana M.J")
        .then((response) => {
          if (response.data.experiences) {
            setExperiences(response.data.experiences);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching experience data:", error);
          setError("Failed to load experience data.");
          setLoading(false);
        });
    }, []);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="grid grid-cols-2 gap-6 max-w-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12"
        variants={cardVariants}
      >
        Experience
      </motion.h2>

      <div className="w-auto max-w-4xl mx-auto">
        {loading ? (
          <div className="text-purple-400 text-xl text-center py-8">
            Loading experience data...
          </div>
        ) : error ? (
          <div className="text-red-500 text-xl text-center py-8">{error}</div>
        ) : (
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experiences.length > 0 ? (
              experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="bg-gray-800/50 rounded-xl shadow-lg border-l-4 border-purple-600 transition-all duration-300 hover:scale-102 overflow-hidden"
                  variants={cardVariants}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-200">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base whitespace-nowrap">
                          {new Date(exp.startDate).toLocaleDateString()}
                          {" - "}
                          {exp.currentJob
                            ? "Present"
                            : new Date(exp.endDate).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-lg md:text-xl text-purple-400">
                          {exp.company}
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {exp.description},Machine Learning & Deep Learning, Computer Vision & Image Processing, Data Handling & Processing, Networking & API Calls, Hardware & Video Processing, Deployment & Performance Monitoring.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-purple-400 text-xl text-center py-8">
                No experience data available.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
  };


  const ProjectsPage = () => {
    const [projectsFromDB, setProjectsFromDB] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch projects from the backend
    useEffect(() => {
      axios
        .get("http://localhost:8080/intern/Chinthana M.J") // Adjust the endpoint if needed
        .then((response) => {
          const dbProjects = response.data.projects.slice(0, 2); // Fetch only the first 2 projects
          setProjectsFromDB(dbProjects);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch project data.");
          setLoading(false);
        });
    }, []);

    // Hardcoded projects
    const hardcodedProjects = [
      {
        title: "Social Network Analysis for Influence Maximization",
        description:
          "I worked on a project to find the most influential users in a social network. I used Python libraries like NetworkX and SNAP to analyze the network. I applied algorithms like PageRank and simulated the Independent Cascade Model to understand how information spreads and how to maximize its reach.",
      },
      {
        title: "Recommendation System for E-commerce",
        description:
          "I built a product recommendation system for an e-commerce platform. I created a graph showing how users interact with items. I used techniques like GraphSAGE and Node2Vec to create embeddings of this graph and then combined these with traditional Collaborative Filtering to make better recommendations. Neo4j was used to manage the graph data.",
      },
    ];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2, // 2-second delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {loading ? (
        <motion.div
          className="text-purple-400 text-xl text-center"
          variants={itemVariants}
        >
          Loading projects...
        </motion.div>
      ) : error ? (
        <motion.div
          className="text-red-500 text-xl text-center"
          variants={itemVariants}
        >
          {error}
        </motion.div>
      ) : (
        [...projectsFromDB, ...hardcodedProjects].map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-600/20 hover:scale-102"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-4 text-purple-400">
              {project.name || project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))
      )}
    </motion.div>
  );
  };



  const ContactPage = () => {
    const [contactData, setContactData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Define error state

    // Fetch contact details from the backend
    useEffect(() => {
      const fetchContactData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/intern/Chinthana M.J"); // Adjust endpoint if needed
          setContactData({
            email: response.data.email,
            phone: response.data.phone,
          });
          setLoading(false);
        } catch (err) {
          console.error("Error fetching contact details:", err);
          setError("Failed to fetch contact details.");
          setLoading(false);
        }
      };

      fetchContactData();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
            staggerChildren: 0.2,
          },
        },
      };

      const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
      };

      return (
        <motion.div
          className="flex flex-col items-center gap-8 w-full p-8 bg-gray-800/50 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Feel free to reach out to me for any queries or further information.
          </motion.h2>

          {loading ? (
            <motion.div
              className="text-purple-400 text-xl text-center"
              variants={itemVariants}
            >
              Loading contact details...
            </motion.div>
          ) : error ? (
            <motion.div
              className="text-red-500 text-xl text-center"
              variants={itemVariants}
            >
              {error}
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-6 w-full"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-4 text-xl p-4 bg-gray-900/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-gray-900"
                variants={itemVariants}
              >
                <Mail className="text-purple-400 w-8 h-8" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-gray-300 hover:text-purple-400"
                >
                  {contactData.email}
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-xl p-4 bg-gray-900/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-gray-900"
                variants={itemVariants}
              >
                <Phone className="text-purple-400 w-8 h-8" />
                <span className="text-gray-300">{contactData.phone}</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-xl p-4 bg-gray-900/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-gray-900"
                variants={itemVariants}
              >
                <Github className="text-purple-400 w-8 h-8" />
                <a
                  href="https://github.com/chinthanamj"
                  className="text-gray-300 hover:text-purple-400"
                >
                  chinthanamj
                </a>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      );
  };


  const InterestsPage = () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3
        }
      }
    };

    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 20
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      },
      hover: {
        scale: 1.05,
        transition: {
          duration: 0.3
        }
      }
    };

    const iconVariants = {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10
        }
      }
    };

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Heart className="w-12 h-12 text-purple-400 mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Dancing</h3>
          <p className="text-gray-300">Dancing makes me happy. I enter a completely new world when I start dancing to the magical beats.</p>
          <motion.video
            src={dance}
            className="w-full h-48 object-cover rounded-lg mt-4"
            controls
            autoPlay
            muted
            loop
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Music className="w-12 h-12 text-purple-400 mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Music</h3>
          <p className="text-gray-300">Trained in classical carnatic music for 6 years and music is stress buster now</p>
          <motion.img
            src={music}
            alt="Music"
            className="w-full h-48 object-cover rounded-lg mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => window.history.back()}
          className="mb-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="flex gap-8">
          <div className="w-64 bg-gray-900 rounded-xl shadow-lg p-4 h-[calc(100vh-8rem)] sticky top-8">
            <nav className="space-y-2">
              <NavLink page="home" icon={<Home />} text="Home" />
              <NavLink page="about" icon={<User />} text="About" />
              <NavLink page="experience" icon={<Briefcase />} text="Experience" />
              <NavLink page="projects" icon={<Code />} text="Projects" />
              <NavLink page="contact" icon={<Mail />} text="Contact" />
              <NavLink page="interests" icon={<Heart />} text="Interests" />
            </nav>
          </div>

          <div className="flex-1 bg-gray-900 rounded-xl shadow-lg p-8">
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'experience' && <ExperiencePage />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'interests' && <InterestsPage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPortfolio;