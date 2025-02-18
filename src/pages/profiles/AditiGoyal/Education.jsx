// Education.jsx
"use client";
import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 mb-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="transform transition duration-300 hover:scale-105"
            >
              <EducationItem educationData={edu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
