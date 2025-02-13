import { useEffect, useState } from "react";
import API from "../axios";

function Education() {
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Static fallback data
  const staticEducation = [
    {
      institution: "PES",
      startYear: "2021",
      endYear: "2025",
      cgpa: "8.11 "
    },
    {
      institution: "NPS",
      startYear: "2005",
      endYear: "2021",
      cgpa: "10"
    }
  ];

  useEffect(() => {
    API.get("http://localhost:8080/intern/Dhatri C")
      .then((response) => {
        setEducation(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching education data:", error);
        // Set static data if API fails
        setEducation({ education: staticEducation });
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
              Education
            </h1>

            {/* Education Items */}
            <div className="space-y-8 md:space-y-12">
              {(education?.education || staticEducation).map((edu, index) => (
                <div
                  key={index}
                  className="relative p-6 md:p-8 border border-[#233554] rounded-lg bg-[rgba(10,25,47,0.8)] transition-all duration-300 ease-in-out hover:translate-x-2.5 hover:bg-[#172a45] hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] hover:border-[#64ffda]"
                >
                  <h3 className="text-2xl ml-6 mb-6 text-[#64ffda] relative before:content-['>'] before:absolute before:-left-6 before:text-[#233554] before:opacity-80">
                    {edu.institution}
                  </h3>
                  <div className="space-y-2 pl-6">
                    <p className="text-[#8892b0] text-lg">startYear: {edu.startYear}</p>
                    <p className="text-[#8892b0] text-lg">endYear: {edu.endYear}</p>
                    <p className="text-[#8892b0] text-lg">Score: {edu.cgpa}</p>
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

export default Education;