import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styling/Experiences.css"

export default function Experiences() {
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
    <div className="experience-page">
      <h1 className="experience-title">Experiences</h1>
      {portfolioData.experiences.map((exp) => (
        <div key={exp.id} className="experience-item">
          <h2 className="experience-title-item">{exp.title}</h2>
          <p className="experience-company"><strong>Company:</strong> {exp.company}</p>
          <p className="experience-duration">
            {new Date(exp.startDate).toLocaleDateString()} -{' '}
            {exp.currentJob ? 'Present' : new Date(exp.endDate).toLocaleDateString()}
          </p>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
      <Link to="/kenny" className="back-button-exp">← Back to Portfolio</Link>
    </div>
  );
}