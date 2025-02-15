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
    <div className="text-left bg-[#191919] p-5 rounded-3xl hover:cursor-pointer hover:bg-[#151515] h-full">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="grid grid-row-2">
          <div>
            <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
            <h2 className="text-xl font-bold inline">
              {getDegreeTitle(educationData.institution)}
            </h2>
            <div className="h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 w-1/5 ml-5 mb-3 mt-1"></div>
            <p>{educationData.institution}</p>
          </div>
        </div>

        <div className="grid grid-row-3">
          <p className="text-gray-500 lg:text-right">
            {educationData.startYear} - {educationData.endYear}
          </p>
          <p className="text-gray-500 lg:text-right">{educationData.cgpa}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
