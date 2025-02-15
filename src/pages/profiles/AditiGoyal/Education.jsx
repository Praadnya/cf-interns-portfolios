
"use client";
import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ data }) => {
  return (
    <div className="text-center mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4">
        {data.education.map((edu, index) => (
          <div key={index}>
            <EducationItem educationData={edu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;