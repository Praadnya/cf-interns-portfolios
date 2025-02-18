// EducationItem.jsx
import React from "react";

const EducationItem = ({ educationData }) => {
  const getDegreeTitle = (institution) => {
    if (institution.toLowerCase().includes("engineering")) {
      return "B.Tech, CSE";
    } else if (institution.toLowerCase().includes("school")) {
      return "High School";
    } else if (institution.toLowerCase().includes("college")) {
      return "Bachelor's Degree";
    }
    return educationData.course || "Degree";
  };

  return (
    <div className="text-left bg-[#191919] p-5 rounded-3xl hover:cursor-pointer hover:bg-[#151515] h-full transition duration-300">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-4 lg:mb-0">
          <div className="flex items-center mb-2">
            <div className="w-1 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-2"></div>
            <h2 className="text-xl font-bold">{getDegreeTitle(educationData.institution)}</h2>
          </div>
          <div className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 w-20 mb-3"></div>
          <p className="text-gray-300">{educationData.institution}</p>
        </div>
        
        <div className="flex flex-col items-start lg:items-end">
          <p className="text-gray-500 lg:text-right mb-1">
            {educationData.startYear} - {educationData.endYear}
          </p>
          {educationData.cgpa && (
            <p className="text-gray-500 lg:text-right">
              CGPA: {educationData.cgpa}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;