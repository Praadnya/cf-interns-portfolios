import React from "react";

const ExperienceItem = ({
  company,
  companyDescription,
  timeDuration,
  location,
  title,
  detail,
  type,
}) => {
  return (
    <div className="text-left bg-[#191919]    p-5 rounded-3xl   hover:cursor-pointer hover:bg-[#151515]">
      <div className="grid lg:grid-cols-2  grid-cols-1">
        {/* Company Name and description */}
        <div className="grid grid-row-2">
          {/* Company Name */}
          <div>
            <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
            <h2 className="text-xl font-bold inline">{company}</h2>
            <div className="h-1  rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 w-1/5 ml-5 mb-3 mt-1"></div>
          </div>

          {/* Company Description */}
          <p className="text-gray-500 mb-3 mt-2">{companyDescription}</p>
        </div>

        {/* Time Duration, Location, Type */}
        <div className="grid grid-row-3 ">
          <p className="text-gray-500 lg:text-right ">{timeDuration}</p>
          <p className="text-gray-500 lg:text-right ">{location}</p>
          <p className="text-gray-500 lg:text-right ">{type}</p>
        </div>
      </div>

      {/* Title and Detail */}
      <p className="text-lg font-semibold ml-2 mt-3">{title}</p>
      <p className="text-gray-400 ml-2">{detail}</p>
    </div>
  );
};

export default ExperienceItem;
