import { useEffect, useState } from "react";
import API from "../axios";

function Experience() {
  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Static fallback data
  const staticExperience = [
    {
      company: "Cars24",
      position: "Software Engineering Intern",
      startDate: "January 2025",
      endDate: "Ongoing",
      description: "Developed full-stack applications using React and Springboot"
    },
    {
      company: "ApoorvaInfolab",
      position: "Web Development Intern",
      startDate: "January 2023",
      endDate: "April 2023",
      description: "Created responsive web designs and implemented UI components"
    }
  ];

  useEffect(() => {
    API.get("http://localhost:8080/intern/Dhatri C")
      .then((response) => {
        setExperience(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching experience data:", error);
        // Set static data if API fails
        setExperience({ experience: staticExperience });
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#0a192f] bg-[radial-gradient(circle_at_25%_25%,#172a45_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#0a192f_0%,transparent_50%)]">
      <div className="container mx-auto flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-[1200px] p-8 text-[#64ffda] font-mono animate-[fadeIn_1s_ease-out]">
          <div className="relative p-8 md:p-12 border border-[#233554] rounded-lg bg-[rgba(10,25,47,0.95)] shadow-[0_0_20px_rgba(100,255,218,0.15)] w-full">
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] rounded-t-lg border-b border-[#233554]">
              <span className="absolute top-[5px] left-[10px] text-[#64ffda] text-xs tracking-wider">
                ◆ ◆ ◆
              </span>
            </div>

            <h1 className="text-4xl font-semibold text-center mb-12 mt-6 tracking-wider text-[#64ffda] relative before:content-['>'] before:absolute before:-left-8 before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
              Work Experience
            </h1>

            {/* Experience Items */}
            <div className="space-y-8 md:space-y-12">
              {(experience?.experiences || staticExperience).map((exp, index) => (
                <div
                  key={index}
                  className="relative p-6 md:p-8 border border-[#233554] rounded-lg bg-[rgba(10,25,47,0.8)] transition-all duration-300 ease-in-out hover:translate-x-2.5 hover:bg-[#172a45] hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] hover:border-[#64ffda]"
                >
                  <h3 className="text-2xl ml-6 mb-6 text-[#64ffda] relative before:content-['>'] before:absolute before:-left-6 before:text-[#233554] before:opacity-80">
                    {exp.company}
                  </h3>
                  <div className="space-y-2 pl-6">
                    <p className="text-[#8892b0] text-lg">Position: {exp.title}</p>
                    <p className="text-[#8892b0] text-lg">Company: {exp.company}</p>
                    <p className="text-[#8892b0] text-lg">Duration: {exp.startDate} - {exp.endDate}</p>
                    <p className="text-[#8892b0] text-lg">Description: {exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Matrix scanline effect */}
      <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 bg-[linear-gradient(transparent_50%,rgba(100,255,218,0.025)_50%)] bg-[length:100%_4px]"></div>
    </div>
  );
}

export default Experience;