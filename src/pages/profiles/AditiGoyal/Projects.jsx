"use client";
import React, { useState } from "react";
import ProjectsData from "../AditiGoyal/data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectSectionn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [tag, setTag] = useState("Machine Learning");

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowMore(false);
  };

  const domainProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSeeMoreClick = () => {
    setShowMore(true);
  };

  const handleShowLessClick = () => {
    setShowMore(false);
  };

  const filteredProjects = domainProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Slice the displayed projects to show only the first three
  const displayedProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="pt-6 px-5">
      <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
          My Projects
        </h2>

        <div className=" text-white flex flex-row justify-center items-center gap-2 md:gap-10  py-6 ">
          <ProjectTag
            onClick={handleTagChange}
            name="Machine Learning"
            isSelected={tag === "Machine Learning"}
          />

          <ProjectTag
            onClick={handleTagChange}
            name="Data Science"
            isSelected={tag === "Data Science"}
          />

          <ProjectTag
            onClick={handleTagChange}
            name="Web Dev"
            isSelected={tag === "Web Dev"}
          />
        </div>
        <div className="mb-8 md:text-right text-left ">
          {/** Search bar  */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#181818] mt-5 text-white md:w-1/5 w-3/5 p-2 rounded-2xl border-2 pl-5 border-[#ADB7BE] focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-y-9  md:gap-12">
          {/** Display projects in a grid */}
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tech={project.tech}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              details={project.details}
            />
          ))}
        </div>

        {/** Show "see more" or "show less" button based on showMore state */}
        {!showMore && filteredProjects.length > 3 && (
          <button
            className="text-white font-bold py-2 px-4 rounded-xl mt-4 hover:bg-[#181818] "
            onClick={handleSeeMoreClick}
          >
            Show All ...
          </button>
        )}
        {showMore && (
          <button
            className="text-white font-bold py-2 px-4 rounded-xl  mt-4 hover:bg-[#181818]"
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
