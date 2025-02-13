// pages/kenny/index.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// (Optional) If you have a Card component, you can use it for styling:
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Kenny() {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{portfolioData.name}'s Portfolio</h1>
      <Button variant="outline" className="mb-4">
        Download Resume
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Info Card */}
        <Link href="/kenny/personal">
          <a>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{portfolioData.email}</p>
                <p>{portfolioData.phone}</p>
              </CardContent>
            </Card>
          </a>
        </Link>

        {/* Education Card */}
        <Link href="/kenny/education">
          <a>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id}>
                    <h3>{edu.institution}</h3>
                    <p>
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </a>
        </Link>

        {/* Experiences Card */}
        <Link href="/kenny/experiences">
          <a>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id}>
                    <h3>{exp.title}</h3>
                    <p>{exp.company}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </a>
        </Link>

        {/* Projects Card */}
        <Link href="/kenny/projects">
          <a>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                {portfolioData.projects.map((project) => (
                  <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.techStack}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </a>
        </Link>
      </div>
    </div>
  );
}
