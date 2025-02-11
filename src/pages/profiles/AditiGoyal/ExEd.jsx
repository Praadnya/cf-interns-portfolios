"use client";
import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";


const ExEd = ({data}) => {
  const [selectedItem, setSelectedItem] = useState("Experience");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section id="exed" className="mt-20 md:0">
      <div className="grid place-items-center ">
        <div className="grid grid-cols-2 place-items-center md:gap-16 gap-10 ">
          {/* Heading for Experience */}
          <div className="grid grid-rows-2">
            <h1
              className={`md:text-3xl text-2xl mb-3 font-extrabold cursor-pointer  ${
                selectedItem === "Experience"
                  ? ""
                  : " text-gray-600 hover:text-gray-300"
              }`}
              onClick={() => handleItemClick("Experience")}
            >
              Experience
            </h1>
            <div
              className={`h-1 bg-gradient-to-r from-primary-500 to-secondary-600 w-3/5  mb-3  rounded-full  ${
                selectedItem === "Experience" ? "block" : "hidden"
              }`}
            ></div>
          </div>

          {/* Heading for Education */}
          <div className="grid grid-rows-2">
            <h1
              className={`md:text-3xl text-2xl mb-3 font-extrabold cursor-pointer ${
                selectedItem === "Education"
                  ? ""
                  : " text-gray-600 hover:text-gray-300"
              }`}
              onClick={() => handleItemClick("Education")}
            >
              Education
            </h1>
            <div
              className={`h-1 bg-gradient-to-r from-primary-500 to-secondary-600 w-3/5  mb-1  rounded-full  ${
                selectedItem === "Education" ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>

        {/* Display selected component */}
        {selectedItem === "Experience" ? <Experience data={data}/> : <Education data={data}/>}
      </div>
    </section>
  );
};

export default ExEd;
