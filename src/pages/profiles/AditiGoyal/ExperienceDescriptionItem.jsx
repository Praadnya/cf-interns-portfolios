import React from "react";

const ExperienceItem = ({
  company,
  companyDescription,
  timeDuration,
  location,
  title,
  detail,
  type,
  description,
  technologies,
}) => {
  return (
    <div className="text-left  hover:bg-[#1a1a1a] p-10 mt-10 rounded-3xl   hover:cursor-pointer">
      <div className="grid lg:grid-cols-2  grid-cols-1">
        {/* Company Name and description */}
        <div className="grid grid-row-2">
          {/* Company Name */}
          <div>
            <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
            <h2 className="text-2xl font-bold inline">{company}</h2>
            <div className="h-1 bg-gradient-to-r from-primary-500 to-secondary-600 w-1/5 ml-5 mb-3 mt-1 rounded-full"></div>
          </div>

          {/* Company Description */}
          <p className="text-gray-500 mb-3 ">{companyDescription}</p>
        </div>

        {/* Time Duration, Location, Type */}
        <div className="grid grid-row-3 ">
          <p className="text-gray-500 lg:text-right ">{timeDuration}</p>
          <p className="text-gray-500 lg:text-right ">{location}</p>
          <p className="text-gray-500 lg:text-right ">{type}</p>
        </div>
      </div>

      {/* Title and Detail */}
      <p className="text-lg font-semibold ml-2 mt-5 ">{title}</p>
      <p className="text-gray-400 ml-2">{detail}</p>

      {/* description */}

      {description && (
        <div className="col-span-2">
          <div className="p-5">
            {description.map((desc, index) => (
              <div key={index} className=" my-2 text-gray-500">
                <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
                {desc}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      {technologies && (
        <div className="col-span-2">
          <p className="text-lg font-semibold ml-2 mt-5 ">
            Tech Stack Involved
          </p>
          <div className="p-5 grid grid-cols-2">
            {technologies.map((desc, index) => (
              <div key={index} className="my-2 text-gray-500">
                <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
                {desc}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
