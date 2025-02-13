import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import "./styling/Kenny.css"; // Import the CSS file

export default function Kenny() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/intern/Kenny');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPortfolioData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="kenny-container">
        <p className="kenny-message">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="kenny-container">
        <p className="kenny-message">Error: {error}</p>
      </div>
    );

  // Show the grid of cards only when the URL is exactly "/kenny"
  const showGrid = location.pathname === '/kenny';

  return (
    <div className="kenny-container">
      <div className="kenny-header">
        <h1 className="kenny-title">{portfolioData.name}'s Portfolio</h1>
        <a href="/resume.pdf" download>
        <Button variant="outline" className="kenny-resume-button">
          Download Resume
        </Button>
        </a>
      </div>

      {/* Back to Interns Button */}
      <div className="back-button-container">
        <Link to="/" className="back-button">Back to Interns</Link>
      </div>

      {showGrid ? (
        <div className="kenny-grid">
          {/* "More of Me" Card */}
          <Link to="/kenny/personal" className="kenny-card about-me-card">
            <h2 className="kenny-card-heading">More of Me</h2>
          </Link>

          {/* "My Education" Card */}
          <Link to="/kenny/education" className="kenny-card education-card">
            <h2 className="kenny-card-heading">My Education</h2>
          </Link>

          {/* "My Experiences" Card */}
          <Link to="/kenny/experiences" className="kenny-card experiences-card">
            <h2 className="kenny-card-heading">My Experiences</h2>
          </Link>

          {/* "My Projects" Card */}
          <Link to="/kenny/projects" className="kenny-card projects-card">
            <h2 className="kenny-card-heading">My Projects</h2>
          </Link>
        </div>
      ) : (
        // When a child route is active, render its component.
        <Outlet />
      )}
    </div>
  );
}
