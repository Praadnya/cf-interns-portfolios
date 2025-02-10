function Experience() {
    
    const experiences = [
      {
        role: "SDE",
        company: "Cars24",
        duration: "1 year",
        skills: ["Learnt React.js", "Learnt Spring Boot"],
      },
      {
        role: "Intern",
        company: "Apoorva InfoLab",
        duration: "6 months",
        skills: ["Worked on Flask", "Integrated APIs"],
      },
    ];
  
    return (
      <div className="min-h-screen w-screen flex justify-center items-center overflow-y-auto
          bg-[#0a192f] bg-[radial-gradient(circle_at_25%_25%,#172a45_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#0a192f_0%,transparent_50%)]">
        
        <div className="container mx-auto flex flex-col items-center justify-start py-10 w-full">
          <div className="flex flex-col gap-8 relative w-full max-w-[800px] mx-auto p-8 
              bg-[rgba(10,25,47,0.95)] border border-[#233554] rounded-lg 
              shadow-[0_0_20px_rgba(100,255,218,0.15)] font-mono text-[#64ffda]
              animate-[bootSequence_1s_ease-out]">
              
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] 
                rounded-t-lg border-b border-[#233554]">
                <span className="absolute top-[5px] left-[10px] text-[#64ffda] 
                    text-xs tracking-wider">
                    ◆ ◆ ◆
                </span>
            </div>
  
            <h1 className="text-center text-4xl text-[#64ffda] mb-10 font-bold relative pb-4
                shadow-[0_0_10px_rgba(100,255,218,0.15)] mt-6
                before:content-['>'] before:absolute before:-left-8 
                before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
                Work Experience
            </h1>
  
            {experiences.map((exp, index) => (
              <div key={index} className="bg-[rgba(10,25,47,0.8)] p-8 rounded-lg border border-[#233554]
                  transition-all duration-300 relative w-full md:w-[calc(100%-4rem)] 
                  mx-auto text-[#64ffda]
                  hover:translate-x-2.5 hover:bg-[#172a45] 
                  hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] hover:border-[#64ffda]
                  before:content-['>'] before:absolute before:left-4 before:text-[#233554]">
                  
                  <h3 className="text-2xl font-semibold mb-2 pl-6
                      shadow-[0_0_5px_rgba(100,255,218,0.15)]">
                      {exp.role}
                  </h3>
                  
                  <div className="space-y-2">
                      <p className="pl-6 text-[#8892b0]">{exp.company}</p>
                      <p className="pl-6 text-[#8892b0]">{exp.duration}</p>
                      <ul className="list-disc pl-12 space-y-1 text-[#8892b0]">
                          {exp.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                      </ul>
                  </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Matrix scanline effect */}
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50
            bg-[linear-gradient(transparent_50%,rgba(100,255,218,0.025)_50%)] 
            bg-[length:100%_4px]">
        </div>
      </div>
    );
}

export default Experience;
