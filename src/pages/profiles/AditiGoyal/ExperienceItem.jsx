import React from "react";

const ExperienceItem = ({ experience }) => {
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())
    );
  };
  return (
    <div className="text-left bg-[#191919] p-5 rounded-3xl hover:cursor-pointer hover:bg-[#151515]">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="grid grid-row-2">
          <div>
            <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
            <h2 className="text-xl font-bold inline">{experience.company}</h2>
            <div className="h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 w-1/5 ml-5 mb-3 mt-1"></div>
          </div>
          <p>Marketing Company</p>
        </div>
        <div className="grid grid-row-3">
          <p className="text-gray-500 lg:text-right">
            {calculateDuration(experience.startDate, experience.endDate)} months
          </p>
          <p className="text-gray-500 lg:text-right">Bangalore</p>
          <p className="text-gray-500 lg:text-right">Freelancing</p>
        </div>
      </div>
      <p className="text-lg font-semibold ml-2 mt-3">{experience.title}</p>
      <p className="text-gray-400 ml-2">{experience.description}</p>
    </div>
  );
};
export default ExperienceItem;
