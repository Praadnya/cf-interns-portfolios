"use client";
import React, { useState } from "react";
import ExperienceItem from "./ExperienceItem";
import ExperienceDesctriptionItem from "./ExperienceDescriptionItem";
import ExperienceList from "../AditiGoyal/data/ExperienceList";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(ExperienceList[0]);

  const handleItemClick = (index) => {
    setSelectedItem(ExperienceList[index]);
  };

  return (
    <div className="text-center mb-24 ">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="grid grid-rows-1 gap-6 lg:m-10 rounded-3xl ">
          {ExperienceList.map((experience, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(index);
              }}
            >
              <ExperienceItem
                company={experience.company}
                companyDescription={experience.companyDescription}
                timeDuration={experience.timeDuration}
                location={experience.location}
                title={experience.title}
                detail={experience.detail}
                type={experience.type}
              />
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          {selectedItem ? (
            <ExperienceDesctriptionItem
              company={selectedItem.company}
              companyDescription={selectedItem.companyDescription}
              timeDuration={selectedItem.timeDuration}
              location={selectedItem.location}
              title={selectedItem.title}
              detail={selectedItem.detail}
              type={selectedItem.type}
              description={selectedItem.description}
              technologies={selectedItem.technologies}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
