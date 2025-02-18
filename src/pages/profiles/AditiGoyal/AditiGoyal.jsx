// import React, { useEffect, useState } from "react";
// import { Fade } from "react-awesome-reveal";
// import { Link } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";
// import viz from "../../../assets/Aditi/viz.gif";
// import viz2 from "../../../assets/Aditi/viz2.gif";
// Make sure axios is imported

import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import viz from "../../../assets/Aditi/viz.gif";
import viz2 from "../../../assets/Aditi/viz2.gif";
import AboutSection from "./AboutSection";
import Skills from "./Skills";
import ExEd from "./ExEd";
import ProjectSectionn from "./Projects";
import EmailSection from "./EmailSection";
import Footer from "./Footer";
import axios from "axios";
import Navbar from "./Navbar";
import Gradient from "./Gradient";
import pdfFile from "../../../assets/Aditi/Aditi.pdf";

const AditiGoyal = () => {
  const [portfolioData, setPortfolioData] = useState({ name: "Aditi" }); // Default value
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/intern/Aditi");
      setPortfolioData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#121212] text-white scroll-smooth">
        <Navbar />
        <Gradient />
        <div className="container mx-auto px-9 md:px-24 py-4 text-white">
          <section
            id="home"
            className="lg:py-16 min-h-screen flex items-center justify-center relative"
          >
            <div className="w-full items-center">
              <Fade cascade direction="up" duration={600} triggerOnce>
                <div className="text-center">
                  <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-600">
                      Hello, I'm{" "}
                    </span>
                    <br />
                    <TypeAnimation
                      sequence={[
                        portfolioData.name,
                        1200,
                        "Web Developer",
                        1000,
                        "Tech Enthusiast",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h1>

                  <div>
                    <Link
                      to="/#contact"
                      className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
                    >
                      Let's Talk
                    </Link>
                    <a
                      href={pdfFile}
                      download="Aditi_Resume.pdf"
                      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                    >
                      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 cursor-pointer">
                        Download CV
                      </span>
                    </a>
                  </div>
                </div>
              </Fade>

              <Fade triggerOnce>
                <div className="rounded-full absolute w-[25%] top-0 left-0 hidden lg:block">
                  <img src={viz} alt="My GIF" />
                </div>
              </Fade>

              <Fade triggerOnce>
                <div className="rounded-full absolute w-[26.5%] -bottom-0 right-0 hidden lg:block">
                  <img src={viz2} alt="My GIF" />
                </div>
              </Fade>
            </div>
          </section>
        </div>

        <AboutSection />
        <Skills />
        <ExEd data={portfolioData} />
        <ProjectSectionn data={portfolioData.projects} />
        <EmailSection />
        <Footer />
      </main>
    </>
  );
};

export default AditiGoyal;
