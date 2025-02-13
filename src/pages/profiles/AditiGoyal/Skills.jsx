import React from "react";
import SkillCard from "./SkillCard";
import skills from "../AditiGoyal/data/SkillsData";

const Skills = () => {
  return (
    <div className="text-center  mb-24 mt-9 ">
      <h1 className="text-3xl mb-12  font-extrabold">Skills</h1>
      <div className=" grid lg:grid-cols-3 gap-9  grid-cols-1">
        {skills.map((category, index) => (
          <div key={index}>
            <SkillCard
              title={Object.keys(category)[0]}
              skills={Object.values(category)[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
