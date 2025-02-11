function Projects() {
  const projects = [
    {
      name: "Shakthi",
      description: "WEbsite for Women Empowerment",
      github: "https://github.com/DhatriC123/Shakti",
      liveDemo: "https://project-one.com"
    },
    {
      name: "Project Two",
      description: "Description of Project Two.",
      github: "https://github.com/project-two",
      liveDemo: "https://project-two.com"
    },
    {
      name: "Project Three",
      description: "Description of Project Three.",
      github: "https://github.com/project-three",
      liveDemo: "https://project-three.com"
    },
    {
      name: "Project Four",
      description: "Description of Project Three.",
      github: "https://github.com/project-three",
      liveDemo: "https://project-three.com"
    }
  ];

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-[#0a192f] bg-[radial-gradient(circle_at_25%_25%,#172a45_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#0a192f_0%,transparent_50%)] overflow-y-auto">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-10">
        <div className="w-full max-w-[1200px] p-8 text-[#64ffda] font-mono animate-[bootSequence_1s_ease-out] flex flex-col items-center">
          <h1 className="text-center text-4xl text-[#64ffda] mb-12 font-semibold relative shadow-[0_0_15px_rgba(100,255,218,0.15)] before:content-['>'] before:absolute before:-left-8 before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
            Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full p-8 bg-[rgba(10,25,47,0.95)] border border-[#233554] rounded-lg shadow-[0_0_20px_rgba(100,255,218,0.15)] relative">
            <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] rounded-t-lg border-b border-[#233554]">
              <span className="absolute top-[5px] left-[10px] text-[#64ffda] text-xs tracking-wider">◆ ◆ ◆</span>
            </div>

            {projects.map((project, index) => (
              <div key={index} className="mt-6 bg-[rgba(10,25,47,0.8)] border border-[#233554] rounded-lg overflow-hidden transition-all duration-300 relative p-6 md:p-8 hover:-translate-y-1.5 hover:bg-[#172a45] hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] hover:border-[#64ffda]">
                <h3 className="text-2xl font-semibold mb-4 relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-[#233554]">
                  {project.name}
                </h3>
                <div className="py-6">
                  <p className="text-[#8892b0] leading-relaxed mb-6 pl-6">{project.description}</p>
                  <div className="flex flex-wrap gap-4 pl-6">
                    <a href={project.github} className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded font-medium transition-all duration-300 border border-[#233554] hover:bg-transparent hover:text-[#64ffda] hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(100,255,218,0.15)]">
                      GitHub
                    </a>
                    <a href={project.liveDemo} className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded font-medium transition-all duration-300 border border-[#233554] hover:bg-transparent hover:text-[#64ffda] hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(100,255,218,0.15)]">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
