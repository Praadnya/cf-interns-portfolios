"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSectionn = ({ data = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSeeMoreClick = () => {
    setShowMore(true);
  };

  const handleShowLessClick = () => {
    setShowMore(false);
  };

  const filteredProjects = data?.filter((project) => {
    if (!project || !project.name || !project.techStack) {
      return false;
    }

    const searchLower = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchLower) ||
      project.techStack.toLowerCase().includes(searchLower)
    );
  });

  const displayedProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="pt-6 px-5">
      <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
          My Projects
        </h2>

        <div className="mb-8 md:text-right text-left">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#181818] mt-5 text-white md:w-1/5 w-3/5 p-2 rounded-2xl border-2 pl-5 border-[#ADB7BE] focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-y-9 md:gap-12">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              tech={project.techStack.split(", ")}
              description={project.description}
              imgUrl="/placeholder-image.jpg" // Add a default image or pass from backend
              gitUrl="#" // Add if available in your data
              previewUrl="#" // Add if available in your data
              details={project.description}
            />
          ))}
        </div>

        {!showMore && filteredProjects.length > 3 && (
          <button
            className="text-white font-bold py-2 px-4 rounded-xl mt-4 hover:bg-[#181818]"
            onClick={handleSeeMoreClick}
          >
            Show All ...
          </button>
        )}
        {showMore && filteredProjects.length > 3 && (
          <button
            className="text-white font-bold py-2 px-4 rounded-xl mt-4 hover:bg-[#181818]"
            onClick={handleShowLessClick}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectSectionn;
