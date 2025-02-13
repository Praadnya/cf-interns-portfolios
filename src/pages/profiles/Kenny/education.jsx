import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styling/Education.css"

export default function Education() {
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
    <div className="education-page">
      <h1 className="education-title">Education</h1>
      {portfolioData.education.map((edu) => (
        <div key={edu.id} className="education-item">
          <h2 className="education-institution"><strong>{edu.institution}</strong></h2>
          <p className="education-duration">From {edu.startYear} to {edu.endYear}</p>
          <p className="education-cgpa">My <strong>CGPA</strong> stands at: <strong>{edu.cgpa}</strong></p>
        </div>
      ))}
      <Link to="/kenny" className="back-button-edu">← Back to Portfolio</Link>
    </div>
  );
}
