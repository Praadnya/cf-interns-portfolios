//import Projects from "./DhatriProjects";


function Home() {
    return (
      <div className="min-h-screen w-screen flex justify-center items-center 
          text-[#64ffda] font-mono animate-[bootSequence_1s_ease-out]
          fixed inset-0 overflow-y-auto
          bg-[#0a192f] bg-[radial-gradient(circle_at_25%_25%,#172a45_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#0a192f_0%,transparent_50%)]">
        
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-10">
            <h1 className="text-center text-4xl text-[#64ffda] mb-10 font-bold relative pb-4
                shadow-[0_0_10px_rgba(100,255,218,0.15)]
                before:content-['>'] before:absolute before:-left-8 
                before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
                About Me
            </h1>
  
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full px-4">
              {/* Profile Section */}
              <div className="w-full md:w-[500px] p-8 bg-[rgba(10,25,47,0.95)] 
                  border border-[#233554] rounded-lg shadow-[0_0_20px_rgba(100,255,218,0.15)] 
                  relative">
                  
                  {/* Terminal Header */}
                  <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] 
                      rounded-t-lg border-b border-[#233554]">
                      <span className="absolute top-[5px] left-[10px] text-[#64ffda] 
                          text-xs tracking-wider">
                          ◆ ◆ ◆
                      </span>
                  </div>
  
                  <img 
                      src="src/assets/Dhatri.jpg" 
                      alt="Profile"
                      className="w-full h-auto rounded-lg mb-4 mt-4"
                  />
                  
                  <div className="bio mt-6">
                      <h2 className="text-2xl font-bold mb-4">Hi! I am Dhatri</h2>
                      <p className="relative pl-6 leading-relaxed my-4 text-[#8892b0]
                          before:content-['>'] before:absolute before:left-0 
                          before:text-[#233554]">
                          I am an SDE intern at Cars24
                      </p>
                  </div>
              </div>
  
              <div className="flex flex-col gap-6 w-full md:w-[500px]">
                {/* Skills Section */}
                <div className="p-8 bg-[rgba(10,25,47,0.95)] border border-[#233554] 
                    rounded-lg shadow-[0_0_20px_rgba(100,255,218,0.15)] relative -mt-4">
                  {/* Terminal Header */}
                  <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] 
                      rounded-t-lg border-b border-[#233554]">
                      <span className="absolute top-[5px] left-[10px] text-[#64ffda] 
                          text-xs tracking-wider">
                          ◆ ◆ ◆
                      </span>
                  </div>
  
                  <h2 className="text-2xl font-bold mb-6 mt-4">Skills</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                      {["SpringBoot", "React", "MySQL", "MongoDB"].map((skill) => (
                          <p key={skill} 
                              className="bg-[rgba(10,25,47,0.8)] py-3 px-6 rounded 
                              border border-[#233554] text-[#64ffda] transition-all duration-300 
                              cursor-pointer shadow-[0_0_5px_rgba(100,255,218,0.15)]
                              hover:bg-[#172a45] hover:-translate-y-0.5 
                              hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] 
                              hover:border-[#64ffda]">
                              {skill}
                          </p>
                      ))}
                  </div>
                </div>
  
                {/* Contact Me Section */}
                <div className="p-8 bg-[rgba(10,25,47,0.95)] border border-[#233554] 
                    rounded-lg shadow-[0_0_20px_rgba(100,255,218,0.15)] relative">
                  {/* Terminal Header */}
                  <div className="absolute top-0 left-0 right-0 h-[25px] bg-[#172a45] 
                      rounded-t-lg border-b border-[#233554]">
                      <span className="absolute top-[5px] left-[10px] text-[#64ffda] 
                          text-xs tracking-wider">
                          ◆ ◆ ◆
                      </span>
                  </div>
  
                  <h2 className="text-2xl font-bold mb-6 mt-4">Contact Me</h2>
                  <p className="text-[#8892b0] mb-4">Feel free to reach out for collaborations or just a chat!</p>
                  <p className="text-[#64ffda]">📧 Email: <a href="mailto:dhatri@example.com" className="underline hover:text-[#8892b0]">dhatri@example.com</a></p>
                  <p className="text-[#64ffda]">💼 LinkedIn: <a href="https://linkedin.com/in/dhatri" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8892b0]">linkedin.com/in/dhatri</a></p>
                </div>
              </div>
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
  
  export default Home;