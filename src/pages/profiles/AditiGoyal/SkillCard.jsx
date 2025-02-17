"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="grid grid-rows-5 text-center   bg-[#181818] rounded-3xl hover:bg-[#1a1a1a]">
      <div className="row-span-1 text-xl px-3 py-4 md:text-2xl  rounded-3xl ">
        <h1 className="text-white mb-2">{title}</h1>
        <div className="h-1 w-1/3  mx-auto bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full"></div>
      </div>

      <div className="row-span-4  text-left p-5 md:px-10 ">
        <div className="text-white grid grid-cols-2  ">
          <Fade direction="up" cascade delay={100} duration={500} triggerOnce>
            {skills.map((skill, index) => (
              <div key={index} className="text-md m-3 md:mx-5 ">
                <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
                {skill.name}
                <div className="text-sm  text-gray-500"> {skill.level} </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
