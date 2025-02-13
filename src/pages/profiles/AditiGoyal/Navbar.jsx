"use client";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiBriefcase2Fill } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const iconSize = "w-6 h-6";

const navLinks = [
  { icon: <AiOutlineHome className={iconSize} />, path: "home" },
  { icon: <AiOutlineUser className={iconSize} />, path: "about" },
  { icon: <BiBookBookmark className={iconSize} />, path: "exed" },
  { icon: <RiBriefcase2Fill className={iconSize} />, path: "projects" },
  { icon: <BiMessageRoundedDetail className={iconSize} />, path: "contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  const handleItemClick = (path) => {
    setActiveNav(path);
  };

  return (
    <div className="bg-[#2e2e2e] bg-opacity-70 backdrop-blur-lg h-16 z-10 fixed w-3/4 md:w-[23%] -translate-x-1/2 left-1/2 bottom-10 rounded-full flex justify-center items-center">
      <div className="grid grid-cols-5 gap-4 items-center">
        {navLinks.map((link) => (
          <div
            key={link.path}
            className={
              activeNav === link.path
                ? "bg-secondary-400 h-12 w-12 items-center justify-center flex rounded-full"
                : "hover:bg-primary-400 h-12 w-12 items-center justify-center flex rounded-full cursor-pointer"
            }
          >
            <ScrollLink
              to={link.path}
              smooth={true}
              duration={500}
              onClick={() => handleItemClick(link.path)}
              spy={true}
              offset={-20}
            >
              {link.icon}
            </ScrollLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
