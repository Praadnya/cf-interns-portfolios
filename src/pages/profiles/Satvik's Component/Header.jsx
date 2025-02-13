import React from "react";

const Header = ({ resumeLink }) => {
  return (
    <header className="bg-gray-900 text-white py-6 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Satvik</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-400 transition">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-400 transition">Education</a></li>
          {resumeLink && (
            <li>
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;