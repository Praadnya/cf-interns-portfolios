import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styling/Personal.css"

export default function Personal() {
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
    <div className="personal-page">
      <h1 className="personal-title">Personal Info</h1>
      <p className="personal-info"><strong>Name:</strong> {portfolioData.name}</p>
      <p className="personal-info"><strong>Email:</strong> {portfolioData.email}</p>
      <p className="personal-info"><strong>Phone:</strong> {portfolioData.phone}</p>
      <Link to="/kenny" className="back-button-personal">← Back to Portfolio</Link>
    </div>
  );
}