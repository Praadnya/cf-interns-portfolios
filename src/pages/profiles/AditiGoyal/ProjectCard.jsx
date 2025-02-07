import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech,
  details,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 w- rounded-t-xl relative group"
        // style={{ background: `url(${imgUrl})`, backgroundSize: "fill",backgroundPosition: "center" }}
      >
        <img
          src={imgUrl}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <p> {details} </p>
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="flex flex-wrap gap-2 mb-2">
          {tech.map((technology, index) => (
            <div
              key={index}
              className=" bg-amber-600 px-2 py-1 rounded-md text-sm"
            >
              {technology}
            </div>
          ))}
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
