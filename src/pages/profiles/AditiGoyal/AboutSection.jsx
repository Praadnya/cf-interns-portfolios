"use client";
import React from "react";
import ImageSection from "./ImageSection";
import AboutItems from "./AboutItems";
import AboutMe from "./AboutMe";
import { Fade } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="md:min-h-screen text-center">
        <h1 className="text-5xl font-extrabold md:p-20 p-10 mt-20 mx-auto text-white">
          About Me
        </h1>

        {/* contents */}
        <div className="grid lg:grid-cols-2 place-self-center grid-cols-1 ">
          {/* Left side Image */}
          <div className="flex  justify-center items-center md:my-10 my-5">
            <ImageSection />
          </div>

          {/* Right side contents */}
          <div className="grid grid-rows-1">
            {/* 3 Items cards */}
            <AboutItems />

            {/* Some text about me */}
            <AboutMe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
