import '@fontsource/press-start-2p';
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, X , Mail, Phone, Github, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import KousthubhaCharacter from '../../../assets/Kousthubha/KousthubhaPixel.png';
import ThemeMusic from '../../../assets/Kousthubha/ThemeMusic.mp3';
import axios from 'axios';
import WhatItFeelsLikeToDrown from "../../../assets/Kousthubha/drowning.png";
import PastelRealism from "../../../assets/Kousthubha/pastelPainting.png";
import Doomsday from "../../../assets/Kousthubha/doomsday.png";
import KoiFish from "../../../assets/Kousthubha/koiFish.png";
import Rose from "../../../assets/Kousthubha/rose.png";

// import { title } from 'process';

const KousthubhaHome = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Why are you here?");
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const messages = ["Why are you here?", "I'm so tired...", "I'm sleepy...", "Wait, is this real?", "I'm bored...", "Why is it so quiet here?", "I'm hungry...", "Did you hear that?"];
  const audioRef = useRef(new Audio(ThemeMusic));

  const [intern, setIntern] = useState(null);
  // const [project, setProject] = useState(null);
  // const [experiences, setExperiences] = useState(null);
  // const [educations, setEducations] = useState(null);
  // const [contacts, setContacts] = useState(null);

  const [showDigitalArtModal, setShowDigitalArtModal] = useState(false);
  const [currentArtIndex, setCurrentArtIndex] = useState(0)

  const artworks = [
    {
      url: WhatItFeelsLikeToDrown,
      title: "What it feels to drown"
    },
    {
      url: PastelRealism,
      title: "Pastel Realism"
    },
    {
      url: Doomsday,
      title: "Doomsday"
    },
    {
      url: KoiFish,
      title: "Koi Fish in a pond"
    },
    {
      url: Rose,
      title: "Rose oil painting"
    }
    // Add more artworks here
  ];

  const nextSlide = () => {
    setCurrentArtIndex((prev) => (prev + 1) % artworks.length);
  };
  
  const prevSlide = () => {
    setCurrentArtIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };


  useEffect(() => {
    audioRef.current.play();
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  const toggleMusic = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => {
        const currentIndex = messages.indexOf(prev);
        return messages[(currentIndex + 1) % messages.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { name: "Age", value: 78 },
    { name: "Energy", value: 60 },
    { name: "Patience", value: 50 }
  ];

  const dailyActivities = [
    "Traveling from home to work and back",
    "Debugging mysterious errors",
    "Blasting music",
    "Taking a nap",
    "Painting",
    "Watching the sunset"
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" }
  ];

  const projects = [
    {
      name: "Gen-AI driven Automated Report Generation for Wrist X-rays",
      description: "Processed wrist X-rays with YOLOv8, generated reports via RAG model (Gemini 1.5).",
    },
    {
      name: "Music Recommendation System for Autism Spectrum Disorder",
      description : "Implemented transfer learning for deep learning models; built emotion-based music recommendations using Spotify data."
    },
    {
      name : "RAG model-powered chatbot for textbook content",
      description : "Built a RAG model with textbook PDF, using Llama Index for retrieval and Llama 2 for response generation."
    }
  ];

  const experience = [
    {
      company : "Cars24",
      role : "Software Developer Intern",
      startDate : "Jan 2025",
      endDate : "Present",
      description : "Working on full stack applications, building features and fixing bugs."
    },
    {
      company : "Pyramid Developers",
      role : "Project Manager Intern",
      startDate : "Mar 2024",
      endDate : "May 2024",
      description : "Managed a team of developers, worked on project timelines and deliverables."
    },
    {
      company : "Center For Internet of Things, PES University",
      role : "Research Intern",
      startDate : "Jun 2023",
      endDate : "Aug 2023",
      description : "Built a Streamlit dashboard for IoT monitoring; used XSensDot for game control and robotic arm operation."
    }
  ]

  const education = [
    {
      institution : "PES University",
      startYear : "2021",
      endYear : "2025",
      cgpa : 8.43
    },
    {
      institution : "Base PU College",
      startYear : "2019",
      endYear : "2021",
      cgpa : 9.6
    },
    {
      institution : "National Public School, Kengeri",
      startYear : "2013",
      endYear : "2019",
      cgpa : 9.62
    }
  ];

  const contact = {
    email : "kousthubhagk@gmail.com",
    phone : "8861773225",
    github : "https://github.com/kousthubhagk",
    linkedin : "https://www.linkedin.com/in/kousthubhagk/"
  };


  useEffect(() => {
    const fetchInternDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/intern/Kousthubha'); 
        if (response.data) {
          setIntern(response.data);
        } else {
          throw new Error("No intern data found");
        }
      } catch (error) {
        console.error("Error fetching intern details:", error);
      }
    };
  
    fetchInternDetails();
  }, []);
  





  // Modal Component to reduce duplication
  const Modal = ({ title, onClose, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-pink-100 border-4 border-pink-300 rounded-lg w-full max-w-2xl transform transition-all duration-300 scale-100">
        <div className="bg-pink-200 p-4 flex justify-between items-center border-b-4 border-pink-300 rounded-t-lg">
          <h2 className="text-xl text-pink-600">{title}</h2>
        </div>
        <div className="p-6 space-y-6">
          {children}
        </div>
        <div className="bg-pink-200 p-4 border-t-4 border-pink-300 rounded-b-lg">
          <button 
            onClick={onClose}
            className="w-full py-2 px-4 bg-pink-300 hover:bg-pink-400 transition-colors rounded-lg border-b-4 border-pink-500 active:border-b-0 active:mt-1 active:mb-[-1px]"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-pink-100 p-14 font-pixel relative text-black">
      {/* Audio Control */}
      <button 
        onClick={toggleMusic} 
        className="fixed top-4 left-4 p-2 bg-pink-200 rounded-lg hover:bg-pink-300 transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      <div className="w-full grid grid-cols-3 gap-8">
        {/* Left Column - Character */}
        <div className="space-y-6">
          {/* Dialog Box */}
          <div className="bg-white border-4 border-pink-300 p-4 rounded-lg relative">
            <div className="absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[100%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-pink-300"></div>
            <p className="text-center">{currentMessage}</p>
          </div>

          {/* Character */}
          <div className="aspect-square bg-pink-200 rounded-lg border-4 border-pink-300 flex items-center justify-center">
            <img 
              src={KousthubhaCharacter}
              alt="Kousthubha's character" 
              className="h-full object-cover" 
            />
          </div>

          {/* Stats Bars */}
          <div className="space-y-4">
            {stats.map(stat => (
              <div key={stat.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{stat.name}</span>
                  <span>{stat.value}%</span>
                </div>
                <div className="h-4 bg-pink-200 rounded-full overflow-hidden border-2 border-pink-300">
                  <div 
                    className="h-full bg-pink-400 transition-all duration-500"
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Navigation */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-pink-200 px-4 py-2 rounded-lg border-2 border-pink-300">
            Version 4.0
          </div>
          {intern && <h1 className="text-2xl text-pink-600">{intern.name}</h1>}
          {/* <h1 className="text-2xl text-pink-600">{intern.name}</h1> */}

          {[
            {text: "About Me", onClick: () => setShowAboutModal(true)},
            {text: "Projects", onClick: () => setShowProjectsModal(true)},
            {text:"Experience", onClick: () => setShowExperienceModal(true)},
            {text:"Education", onClick: () => setShowEducationModal(true)},
            {text: "Art Gallery", onClick: () => setShowDigitalArtModal(true)},
            {text:"Contact Me", onClick: () => setShowContactModal(true)}
          ].map(button => (
            <button 
              key={button.text}
              onClick={button.onClick}
              className="w-full py-3 px-6 bg-pink-300 hover:bg-pink-400 transition-colors rounded-lg border-b-4 border-pink-500 active:border-b-0 active:mt-1 active:mb-[-1px]">
              {button.text}
            </button>
          ))}
        </div>

        {/* Right Column - Activities & Music */}
        <div className="space-y-6">
          <div className="bg-pink-200 p-4 rounded-lg border-2 border-pink-300">
            <h2 className="text-xl text-pink-600 mb-4">DAILY ACTIVITIES</h2>
            <ul className="space-y-2">
              {dailyActivities.map((activity, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spotify Placeholder */}
          <div className="bg-pink-200 p-4 rounded-lg border-2 border-pink-300">
            <iframe 
              title="Spotify Player"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1EpA285z1oQ9GF?utm_source=generator" 
              width="100%" 
              height="380"
              allowtransparency="true" 
              allow="encrypted-media"
            />
          </div>
        </div>
      </div>

      {/* About Me Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-pink-100 border-4 border-pink-300 rounded-lg w-full max-w-2xl transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="bg-pink-200 p-4 flex justify-between items-center border-b-4 border-pink-300 rounded-t-lg">
              <h2 className="text-xl text-pink-600">ABOUT ME</h2>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* About Text */}
              <div className="bg-white border-2 border-pink-300 rounded-lg p-4">
                <p className="text-sm leading-relaxed">
                  Hi! I'm Kousthubha, a software developer at Cars24 with a passion to make everything creative. When I'm not coding, you can find me painting, blasting music, watching the sunset, clicking random photos, crocheting, watching anime, or travelling.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg text-pink-600 mb-4">TECH STACK</h3>
                <div className="grid grid-cols-3 gap-4">
                  {techStack.map((tech) => (
                    <div 
                      key={tech.name}
                      className="bg-pink-200 border-2 border-pink-300 rounded-lg p-3 text-center hover:bg-pink-300 transition-colors"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-pink-200 p-4 border-t-4 border-pink-300 rounded-b-lg">
              <button 
                onClick={() => setShowAboutModal(false)}
                className="w-full py-2 px-4 bg-pink-300 hover:bg-pink-400 transition-colors rounded-lg border-b-4 border-pink-500 active:border-b-0 active:mt-1 active:mb-[-1px]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Projects modal */}
      {showProjectsModal && (
        <Modal title="PROJECTS" onClose={() => setShowProjectsModal(false)}>
          <div className='space-y-4'>
          {intern && intern.projects.map((inter) => (
            <div key={inter.id} className="bg-white border-2 border-pink-300 rounded-lg p-4">
              <h2 className="text-lg text-pink-600 mb-2">{inter.name}</h2>
              {/* <h3 className="text-lg text-pink-600 mb-2">{inter.name}</h3> */}
              <p className="text-sm">{inter.description}</p>
            </div>
          ))}

          </div>
        </Modal>
      )}

      {/* Experience modal */}
      {showExperienceModal && (
        <Modal title="EXPERIENCE" onClose={() => setShowExperienceModal(false)}>
          <div className='space-y-6'>

          {intern && intern.experiences.map((inter) => (
            <div key={inter.id} className="bg-white border-2 border-pink-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-pink-600">{inter.company}</h3>
                <span className="text-sm text-pink-400">
                  {new Date(inter.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - 
                  {new Date(inter.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                </span>
              </div>
              <h4 className="text-sm font-bold mb-2">{inter.title}</h4>
              <p className="text-sm">{inter.description}</p>
            </div>
          ))}


          {/* //make above implement below */}

            {/* {experience.map((exp, index) => (
              <div key={index} className="bg-white border-2 border-pink-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-pink-600">{exp.company}</h3>
                <span className="text-sm text-pink-400">{exp.startDate} - {exp.endDate}</span>
              </div>
              <h4 className="text-sm font-bold mb-2">{exp.role}</h4>
              <p className="text-sm">{exp.description}</p>
            </div>
            ))} */}

          </div>
        </Modal>
      )}

      {/* Education modal */}
      {showEducationModal && (
        <Modal title="EDUCATION" onClose={() => setShowEducationModal(false)}>
          <div className="space-y-6">

          {intern && intern.education.map((inter) => (
            <div key={inter.id} className="bg-white border-2 border-pink-300 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg text-pink-600">{inter.institution}</h3>
              <span className="text-sm text-pink-400">{inter.startYear} - {inter.endYear}</span>
              </div>
              <p className="text-sm">CGPA: {inter.cgpa}</p>
            </div>
          ))}

            {/* {education.map((edu, index) => (
              <div key={index} className="bg-white border-2 border-pink-300 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-pink-600">{edu.institution}</h3>
                  <span className="text-sm text-pink-400">{edu.startYear} - {edu.endYear}</span>
                </div>
                <p className="text-sm">CGPA: {edu.cgpa}</p>
              </div>
            ))} */}

          </div>
        </Modal>
      )}

      {/* Art gallery modal */}
      {showDigitalArtModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-pink-100 p-6 rounded-lg border-4 border-pink-300 max-w-4xl w-full mx-4 relative">
            <button
              onClick={() => setShowDigitalArtModal(false)}
              className="absolute top-4 right-4 p-2 bg-pink-200 hover:bg-pink-300 rounded-lg transition-colors"
            >
              <X />
            </button>

            <h2 className="text-2xl text-pink-600 text-center mb-6">Digital Art Gallery</h2>

            <div className="relative aspect-video bg-pink-200 rounded-lg border-4 border-pink-300 overflow-hidden">
              {artworks.length > 0 && (
                <img
                  src={artworks[currentArtIndex].url}
                  alt={artworks[currentArtIndex].title}
                  className="w-full h-full object-contain"
                />
              )}

              {artworks.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-pink-300 hover:bg-pink-400 rounded-lg transition-colors"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-pink-300 hover:bg-pink-400 rounded-lg transition-colors"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-pink-200 bg-opacity-90 p-4">
                <p className="text-center text-pink-600">
                  {artworks[currentArtIndex]?.title || 'No title'}
                </p>
              </div>

              {artworks.length > 1 && (
                <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
                  {artworks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentArtIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentArtIndex ? 'bg-pink-500' : 'bg-pink-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact me modal */}
      {showContactModal && (
        <Modal title="CONTACT ME" onClose={() => setShowContactModal(false)}>
          {intern && 
          <div className="grid grid-cols-1 gap-4">
            <a 
              href={`mailto:${intern.email}`}
              className="flex items-center space-x-3 bg-white border-2 border-pink-300 rounded-lg p-4 hover:bg-pink-50 transition-colors"
            >
              <Mail className="text-pink-600" />
              <span>{intern.email}</span>
            </a>
            <a 
              href={`tel:${intern.phone}`}
              className="flex items-center space-x-3 bg-white border-2 border-pink-300 rounded-lg p-4 hover:bg-pink-50 transition-colors"
            >
              <Phone className="text-pink-600" />
              <span>{intern.phone}</span>
            </a>
            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white border-2 border-pink-300 rounded-lg p-4 hover:bg-pink-50 transition-colors"
            >
              <Github className="text-pink-600" />
              <span>GitHub Profile</span>
            </a>
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white border-2 border-pink-300 rounded-lg p-4 hover:bg-pink-50 transition-colors"
            >
              <Linkedin className="text-pink-600" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
    }
        </Modal>
      )}
    </div>
  );
};

export default KousthubhaHome;