"use client";
import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ data }) => {
  if (!data || !data.experiences || data.experiences.length === 0) {
    return <div>No experience data available</div>;
  }

  return (
    <div className="text-center mb-24">
      <div className="grid grid-cols-1 gap-6">
        {data.experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id || index}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
