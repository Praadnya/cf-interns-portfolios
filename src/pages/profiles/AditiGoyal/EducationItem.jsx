import React from "react";
const ExperienceItem = ({ data }) => {
  return (
    <>
      <div className="text-left bg-[#191919]    p-5 rounded-3xl   hover:cursor-pointer hover:bg-[#151515]">
        <div>
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="grid lg:grid-cols-2  grid-cols-1">
                <div className="grid grid-row-2">
                  <div> 
                    <div className="inline-block w-1 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 mr-2"></div>
                    <h2 className="text-xl font-bold inline">B.Tech, CSE</h2>
                    <div className="h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 w-1/5 ml-5 mb-3 mt-1"></div>
                    <p>{edu.institution}</p>
                  </div>
                  </div>

                  <div className="grid grid-row-3">
                    <p className="text-gray-500 lg:text-right">
                      {edu.startYear} - {edu.endYear}
                    </p>
                    <p className="text-gray-500 lg:text-right">{edu.cgpa}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
