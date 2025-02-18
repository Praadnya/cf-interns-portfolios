import { useState, useEffect } from 'react';
import axios from "axios"; // Import Axios
import { 
  FaWindowClose, 
  FaWindowMinimize,
  FaWindowMaximize
} from 'react-icons/fa';

import "./diya-index.css";

// Window Component
const Window = ({ isOpen, onClose, title, children, zIndex }) => {
  // ... existing Window component code ...
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div 
      className="window"
      style={{ 
        left: isMaximized ? 0 : position.x, 
        top: isMaximized ? 0 : position.y,
        width: isMaximized ? '100%' : 'auto',
        height: isMaximized ? 'calc(100% - 40px)' : 'auto',
        zIndex 
      }}
    >
      <div 
        className="window-title"
        onMouseDown={handleMouseDown}
      >
        <span>{title}</span>
        <div className="window-controls">
          <button onClick={() => {}}>
            <FaWindowMinimize />
          </button>
          <button onClick={toggleMaximize}>
            <FaWindowMaximize />
          </button>
          <button onClick={onClose}>
            <FaWindowClose />
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

// Desktop Icon Component
const DesktopIcon = ({ iconSrc, label, onClick }) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <img 
        src={iconSrc} 
        alt={label} 
        width="32" 
        height="32" 
        style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }} 
      />
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
};

const Diya = () => {
  const [openWindows, setOpenWindows] = useState({
    about: false,
    projects: false,
    music: false,
    photo: false
  });
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/intern/Diya');
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const toggleWindow = (window) => {
    setOpenWindows(prev => ({
      ...prev,
      [window]: !prev[window]
    }));
    setActiveWindow(window);
  };

  const getWindowZIndex = (window) => {
    return window === activeWindow ? 30 : 10;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* Desktop */}
      <div className="desktop">
        {/* Desktop Icons */}
        <div className="desktop-icons">
          <DesktopIcon iconSrc="src/assets/Diya/user.ico" label="About Me" onClick={() => toggleWindow('about')} />
          <DesktopIcon iconSrc="src/assets/Diya/folder.ico" label="Projects" onClick={() => toggleWindow('projects')} />
          <DesktopIcon iconSrc="src/assets/Diya/music.ico" label="Music" onClick={() => toggleWindow('music')} />
          <DesktopIcon iconSrc="src/assets/Diya/photos.ico" label="Photos" onClick={() => toggleWindow('photo')} />
        </div>

        {/* Windows */}
        <Window 
          isOpen={openWindows.about} 
          onClose={() => toggleWindow('about')} 
          title="About Me"
          zIndex={getWindowZIndex('about')}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>About Me</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : userData ? (
            <div>
              <p>Hello! I'm {userData.name}, an intern at Cars24 Financial Services and a fourth year CS student at PES University.</p>
              <p><strong>Contact:</strong> {userData.email} | {userData.phone}</p>
              <p>Languages I know include Java, C++, Javascript among others. I specialize in Machine Learning and Data science and was a TA for Human Computer Interaction, a UIUX subject at my college.
              Outside of my academic pursuits, I enjoy reading and drawing.</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </Window>

        <Window 
          isOpen={openWindows.projects} 
          onClose={() => toggleWindow('projects')} 
          title="My Projects"
          zIndex={getWindowZIndex('projects')}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Projects & Experience</h2>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Accesible Legal Assistant:</strong> An NLP project that uses a finetuned LegalPegasus model to provide summarization of complex legal documents, recommendation of similar legal cases and translation services through a one stop app.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Backtesting Stock Strategies:</strong> A python data analysis project that backtests simple moving average, contrarian strategies against the US Stock market from 2010-2024
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Sign Language Translator:</strong> A trained CNN model that translates pictures of sign language hands to the respective english translation according to ASL (American Sign Language)
            </li>
          </ul>
        </Window>

        <Window 
          isOpen={openWindows.music} 
          onClose={() => toggleWindow('music')} 
          title="My Music"
          zIndex={getWindowZIndex('music')}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            My Playlist
          </h2>
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/2KEW8UQHLc0UB2BV2Kak8Y?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </Window>

        <Window 
          isOpen={openWindows.photo} 
          onClose={() => toggleWindow('photo')} 
          title="Me!"
          zIndex={getWindowZIndex('photo')}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="src/assets/Diya/picture.jpeg" 
              alt="My Photo" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '500px', 
                border: '4px solid white', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)' 
              }} 
            />
          </div>
        </Window>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <button className="start-button">
          <span style={{ marginRight: '8px' }}>Start</span>
        </button>
        <div className="taskbar-buttons">
          {Object.entries(openWindows).map(([key, isOpen]) => 
            isOpen && (
              <button 
                key={key}
                className={`taskbar-button ${activeWindow === key ? 'active' : ''}`}
                onClick={() => setActiveWindow(key)}
              >
                {key === 'about' ? 'About Me' : 
                 key === 'projects' ? 'My Projects' : 
                 key === 'music' ? 'My Music' : 'My Photo'}
              </button>
            )
          )}
        </div>
        <div className="taskbar-time">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Diya;