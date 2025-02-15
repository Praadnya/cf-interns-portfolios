import React, { useState, useEffect } from "react";

const Projects = ({ projects }) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    if (projects && Array.isArray(projects)) {
      setProjectList(projects);
    }
  }, [projects]);

  console.log("Rendered Projects:", projectList);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return <div className="text-center text-gray-500">No projects data available.</div>;
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-indigo-600">
                  {project?.name || "No Title Available"}
                </h3>
                <p className="text-gray-600 mb-4">{project?.description || "No Description"}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {/* If techStack is a string, display it directly */}
                  {project?.techStack ? (
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {project.techStack}
                    </span>
                  ) : (
                    <span className="text-gray-500">No technologies listed.</span>
                  )}
                </div>
                <div className="flex gap-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
