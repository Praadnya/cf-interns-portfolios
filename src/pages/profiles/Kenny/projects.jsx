import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styling/Projects.css"; // Import the Projects-specific CSS

export default function Projects() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects</h1>
      {portfolioData.projects.map((project) => (
        <div key={project.id} className="project-item">
          <h2 className="project-name">{project.name}</h2>
          <p className="project-tech">
            <strong>Tech Stack:</strong> {project.techStack}
          </p>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
      <Link to="/kenny" className="back-button-proj">← Back to Portfolio</Link>
    </div>
  );
}
