import React, { useState, useEffect } from "react";
import Addn_details from "./rickvi/Addn_details";
import Research from "./rickvi/Research";
import Internship from "./rickvi/Internship";
import AboutMe from "./rickvi/AboutMe";

export default function Rickvi() {
    const [intern, setIntern] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchIntern = async () => {
            try {
                const response = await fetch("http://localhost:8080/intern/Rickvibhadhini");
                if (!response.ok) throw new Error("Intern not found");

                const data = await response.json();
                setIntern(data);
                setError("");
            } catch (err) {
                setIntern(null);
                setError(err.message);
            }
        };

        fetchIntern();
    }, []);

    return (
        <div className="relative min-h-screen bg-zinc-900 text-white p-12 mt-5 ml-5 mr-5 overflow-hidden">

            {/* 🔵 Abstract Floating Shapes */}
            <div className="absolute top-10 left-20 w-40 h-40 bg-indigo-500 rounded-full opacity-30 blur-3xl animate-pulse "></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

            {/* ✨ Animated Dotted Background */}
            <div className="absolute inset-0 bg-grid-small bg-opacity-10 pointer-events-none"></div>

            <div className="absolute right-20 grid grid-cols-4 animate-bounce">
                    <p>react</p>
                    <p>css</p>
                    <p>tech</p>
                    <p>portfolio</p>
            </div>

            {/* Floating Profile Section */}
            <div className="relative flex items-center ">
                <div className="absolute top-0 left-20 bg-zinc-800 shadow-2xl rounded-3xl p-6 w-80 text-center text-gray-300 transform hover:scale-105 transition border-2 border-gray-500 ">
                    <h1 className="text-4xl font-bold text-white">My Profile</h1>
                    
                    {error && <p className="text-red-500 text-lg">{error}</p>}

                    {intern && (
                        <>
                            <h2 className="text-2xl text-gray-100 font-semibold mt-4">{intern.name}</h2>
                            <p className="text-gray-400"><strong>Phone:</strong> {intern.phone}</p>
                            <p className="text-gray-400">
                                <strong>Email:</strong> <a href={`mailto:${intern.email}`} className="text-blue-400 underline">{intern.email}</a>
                            </p>
                        </>
                    )}
                </div>
                


            </div>

        

            {/* Main Content Layout */}
            <div className="flex flex-col justify-center items-center mt-40 space-y-12">

                {/* About me */}
                <AboutMe />
                
                {/* 🎓 Education Section */}
                <div className="w-2/3 bg-zinc-800 p-8 rounded-lg shadow-lg border-2 border-purple-400">
                    <h1 className="text-3xl font-bold mb-4 text-purple-400">🎓 Education</h1>
                    <p className="text-lg">📌 <strong>Oxford Senior Secondary School (2009-2019)</strong></p>
                    <p className="text-lg">📌 <strong>Sandhana PU College (2019-2021)</strong></p>
                    <p className="text-lg">📌 <strong>PES University (2021-2025)</strong></p>
                </div>

                {/* 💻 Projects Section (Timeline Style) */}
                <div className="w-2/3 relative">
                    <h1 className="text-3xl font-bold text-cyan-400 mb-6">💻 Projects</h1>

                    <div className="border-l-4 border-cyan-400 pl-6 space-y-6">
                        
                        {/* Dynamically Fetched Projects */}
                        {intern && intern.projects && intern.projects.map((project, index) => (
                            <div key={index} className="relative before:absolute before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:-left-6 before:top-2 hover:bg-zinc-800 p-4 rounded-lg transition border-l-2 border-gray-600">
                                <h3 className="text-2xl font-semibold">{project.name}</h3>
                                <p className="text-gray-300"><strong>Tech Stack:</strong> {project.techStack}</p>
                                <p className="text-gray-400">{project.description}</p>
                            </div>

                            

                            
                        ))}

                        {[
                            { name: "Task Management Application - Raft-SQL", description: "Function for handling Raft Consensus where the election of leader node and message passing between nodes is implemented." ,
                                des2:"Involving Create,Delete,update operations where the users can enter tasks in a streamlit frontend.",
                                des3:"Integrating Raft and SQL for storage of the tasks."},
                            { name: "Distributed Load Testing System", description: "Developed a scalable Python-based system using Kafka for distributed load testing, optimizing performance.",
                                des2:"1 Server py file and 8 driver node py files which sends messages to the server file. ",
                                des3:"Messges like heartbeat and few statistics were calculated at timestamps of 1000 ms."
                             },
                            { name: "FashionX-GAN", description: "Collected trendy fashion images from user and analysis was done using k-means clustering,generating meta-data and plotting seasonal trends. ",
                                des2:"Around 100+ images was used from both trendy and vintage colection was passed to a cycle-GAN model for generating unique collections. ",
                                des3:"Diffusion models like stable diffusion were also used with prompt techniques to generate fashion images."
                            }
                            
                        ].map((project, index) => (
                            <div key={index} className="relative before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-left-6 before:top-2 hover:bg-zinc-800 p-4 rounded-lg transition border-l-2 border-gray-600">
                                <h3 className="text-2xl font-semibold">{project.name}</h3>
                                <ul className="text-gray-400 list-disc">
                                    <li ><p className="text-gray-400">{project.description}</p></li>
                                    <li><p className="text-gray-400">{project.des2}</p></li>
                                    <li><p className="text-gray-400">{project.des3}</p></li>
                                </ul>
                                
                            
                            </div>
                        ))}

                            


                    </div>
                </div>

                {/* Additional Details Section */}
                <Addn_details />

                {/* 📑 Research Paper Section */}
                <Research />

                {/* Internship*/}
                <Internship />
                
            </div>
        </div>
    );
}
