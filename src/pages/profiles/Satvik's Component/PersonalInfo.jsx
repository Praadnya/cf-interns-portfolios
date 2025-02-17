import React, { useState } from 'react';

// Component to display personal information with animations
const PersonalInfo = ({ personalInfo }) => {
  const [contactVisible, setContactVisible] = useState(false);

  const handleContactClick = () => {
    setContactVisible(!contactVisible); // Toggle the visibility of the contact info
  };

  // If personalInfo is not available, display "Loading..."
  if (!personalInfo) return <div>Loading...</div>;

  // Ensure email and phone exist and fall back if not available
  const email = personalInfo?.email || 'Email not available';
  const phone = personalInfo?.phone || 'Phone not available';

  return (
    <section id="about" className="min-h-screen relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-70 animate-pulse"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3 transform hover:scale-110 transition-transform duration-500 ease-in-out">
            <img
              src={personalInfo?.profileImage || "src/assets/Satvik.jpeg"}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-4 border-white"
            />
          </div>
          <div className="md:w-2/3 text-white text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
              Hello, I'm {personalInfo?.name || 'Satvik'}
            </h2>
            <p className="text-xl mb-6 opacity-80 animate__animated animate__fadeIn animate__delay-2s">
              Developer | Full-Stack Enthusiast | Trader | Problem Solver
            </p>
            <p className="text-lg mb-8 opacity-90 animate__animated animate__fadeIn animate__delay-3s">
              I am passionate about creating intuitive, user-friendly applications and solving complex problems across various domains. 
              With a strong foundation in Full-Stack development, I am experienced in building scalable backend systems with Spring Boot and 
              integrating seamless frontend designs with React. In addition, my interest in the financial market has led me to explore trading algorithms, 
              while problem-solving remains my core strength in every project I undertake.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <button 
                onClick={handleContactClick} 
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-8 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl hover:bg-green-600 ease-in-out duration-300"
              >
                Contact Me
              </button>
              <a 
                href={personalInfo?.resumeLink || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transform transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Conditional rendering of email and phone based on contactVisible state */}
            {contactVisible && (
              <div className="mt-6 text-lg animate__animated animate__fadeIn animate__delay-4s">
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App component
const App = () => {
  // Manually setting the personalInfo object
  const personalInfo = {
    name: 'Satvik',
    email: 'pandeysatvik2002@gmail.com',
    phone: '8004392172',
    resumeLink: 'https://drive.google.com/file/d/11HCn7_JoOLTUQJOSa1PnTWumhX4LQIem/view?usp=drive_link', 
    profileImage: 'src/assets/Satvik.jpeg' // Manually set profile image here
  };

  return (
    <div>
      <PersonalInfo personalInfo={personalInfo} />
    </div>
  );
};

export default App;
