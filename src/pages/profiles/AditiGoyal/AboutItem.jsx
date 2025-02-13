import React from "react";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from next

const AboutItem = ({ icon, title, href }) => {
  return (
    <Link href={href} target="_blank">
      {" "}
      {/* Wrap the content in a Link component */}
      <div className="w-32 h-32 rounded-3xl md:my-0 p-2 my-10 hover:bg-[#1f1f1f]">
        <img src={icon} alt="icon" className="mx-auto w-7 my-1" />
        <h2 className="text-lg font-bold m-3">{title}</h2>
      </div>
    </Link>
  );
};

export default AboutItem;
