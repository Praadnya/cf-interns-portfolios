"use client";
import React, { useState } from "react";
import EducationItem from "./EducationItem";
import ExperienceDesctriptionItem from "./ExperienceDescriptionItem";

const Education = ({ data }) => {
  const EducationList = [
    {
      course: "B.Tech C.S.E",
      school: "PES University, Bangalore",
      timeDuration: "2021 - 2025",
      grade: "CGPA: 8.65",

      achievements: [
        "MRD Scholarship for being in top 20% in II Semester",
        "MRD Scholarship for being in top 20% in III Semester",
        "MRD Scholarship for being in top 20% in IV Semester",
      ],
    },
    {
      course: "11th and 12th Grade",
      school: "K.V.M. Sr. Sec. School, Panchkula",
      timeDuration: "2019 - 2021",
      grade: "CBSE  Percentage: 92%",

      achievements: [],
    },
    {
      course: "9th and 10th Grade",
      school: "St. Thomas School, Jagadhri",
      timeDuration: "2018",
      grade: "ICSE  Percentage: 95%",

      achievements: [],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(EducationList[0]);

  const handleItemClick = (index) => {
    setSelectedItem(EducationList[index]);
  };

  return (
    <div className="text-center mb-24 ">
      <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
        <div className="grid grid-rows-3 gap-10 lg:m-10 rounded-3xl ">
          {data.education.map((edu, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(index);
              }}
            >
              <EducationItem data={data} />
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          {selectedItem ? (
            <ExperienceDesctriptionItem
              company={selectedItem.course}
              companyDescription={selectedItem.school}
              timeDuration={selectedItem.timeDuration}
              location={selectedItem.grade}
              description={selectedItem.achievements}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
