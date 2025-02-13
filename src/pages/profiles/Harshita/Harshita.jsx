// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const Portfolio = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <main className="bg-purple-700 w-screen min-h-screen overflow-x-hidden">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-white rounded-xl shadow-lg flex gap-4 p-2">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-4 py-2 text-gray-700 hover:bg-purple-100 rounded-lg transition-colors capitalize"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//         <h1 className="text-6xl font-bold text-white mb-6">Harshita Khajuria</h1>
//         <p className="text-xl text-purple-200 mb-12 max-w-2xl">
//           Frontend Developer & Data Scientist passionate about creating beautiful, functional web experiences
//         </p>
//         <button
//           onClick={() => scrollToSection('education')}
//           className="animate-bounce"
//           aria-label="Scroll to content"
//         >
//           <ChevronDown className="text-white" size={48} />
//         </button>
//       </section>

//       {/* Content Sections Container */}
//       <div className="w-screen px-4 md:px-8">
//         {/* Education Section */}
//         <section id="education" className="min-h-screen flex items-center justify-center py-20">
//           <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//             <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
//             <div className="space-y-6 text-white">
//               <div className="border-l-4 border-purple-400 pl-4">
//                 <h3 className="text-xl font-semibold">University Name</h3>
//                 <p className="text-purple-200">Degree • Year - Year</p>
//                 <p className="mt-2">Details will be fetched from MongoDB...</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="min-h-screen flex items-center justify-center py-20">
//           <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//             <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {[1, 2, 3, 4].map((project) => (
//                 <div
//                   key={project}
//                   className="bg-purple-900/50 rounded-xl p-6 hover:scale-105 transition-transform"
//                 >
//                   <h3 className="text-xl font-semibold text-white">Project {project}</h3>
//                   <p className="text-purple-200 mt-2">Details will be fetched from MongoDB...</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="min-h-screen flex items-center justify-center py-20">
//           <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//             <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>
//             <div className="space-y-8">
//               {[1, 2].map((exp) => (
//                 <div key={exp} className="border-l-4 border-purple-400 pl-4">
//                   <h3 className="text-xl font-semibold text-white">Company Name</h3>
//                   <p className="text-purple-200">Position • Duration</p>
//                   <p className="text-purple-100 mt-2">Details will be fetched from MongoDB...</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="min-h-screen flex items-center justify-center py-20">
//           <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl p-8">
//             <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
//             <div className="space-y-4 text-purple-100">
//               <p>Email: example@email.com</p>
//               <p>LinkedIn: linkedin.com/in/username</p>
//               <p>GitHub: github.com/username</p>
//               <p>Additional contact details will be fetched from MongoDB...</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;

// import React, { useState } from 'react';
// import { ChevronDown, Sun, Moon } from 'lucide-react';

// const Portfolio = () => {
//   const [theme, setTheme] = useState('gradient-2'); // You can change default theme here

//   const themes = {
//     'gradient-1': 'bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-700',
//     'gradient-2': 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
//     'gradient-3': 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
//     'gradient-4': 'bg-gradient-to-br from-emerald-900 via-teal-900 to-teal-800'
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <main className={`w-screen min-h-screen overflow-x-hidden ${themes[theme]}`}>
//       {/* Animated Background Shapes - Adds subtle movement */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-48 -right-48 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-48 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//       </div>

//       {/* Theme Switcher */}
//       <div className="fixed top-4 right-4 z-50 flex gap-2">
//         {Object.keys(themes).map((themeName) => (
//           <button
//             key={themeName}
//             onClick={() => setTheme(themeName)}
//             className={`w-6 h-6 rounded-full ${themes[themeName]} border-2 
//               ${theme === themeName ? 'border-white' : 'border-transparent'}`}
//           />
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-white/10 backdrop-blur-md rounded-full flex gap-2 p-1">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors capitalize text-sm"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Hero Section with Particle Effect */}
//       <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//         <div className="space-y-6 relative z-10">
//           <h1 className="text-9xl font-bold text-white tracking-tight">
//             Harshita Khajuria
//           </h1>
//           <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
//             Frontend Developer & Data Scientist passionate about creating beautiful, functional web experiences
//           </p>
//           <button
//             onClick={() => scrollToSection('education')}
//             className="mt-12 animate-bounce inline-block"
//             aria-label="Scroll to content"
//           >
//             <ChevronDown className="text-white/80 hover:text-white transition-colors" size={36} />
//           </button>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <div className="relative z-10 w-screen px-4 md:px-8 space-y-32 pb-32">
//         {/* Education Section */}
//         <section id="education" className="max-w-6xl mx-auto pt-20">
//           <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all">
//               <h3 className="text-xl font-semibold text-white">University Name</h3>
//               <p className="text-white/60 mt-1">Degree • Year - Year</p>
//               <p className="text-white/80 mt-4">Details will be fetched from MongoDB...</p>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section id="projects" className="max-w-6xl mx-auto pt-20">
//           <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[1, 2, 3, 4].map((project) => (
//               <div
//                 key={project}
//                 className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all cursor-pointer"
//               >
//                 <h3 className="text-xl font-semibold text-white mb-4">Project {project}</h3>
//                 <p className="text-white/60 group-hover:text-white/80 transition-colors">
//                   Details will be fetched from MongoDB...
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Experience Section */}
//         <section id="experience" className="max-w-6xl mx-auto pt-20">
//           <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
//           <div className="space-y-8">
//             {[1, 2].map((exp) => (
//               <div key={exp} 
//                 className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all"
//               >
//                 <h3 className="text-xl font-semibold text-white">Company Name</h3>
//                 <p className="text-white/60 mt-1">Position • Duration</p>
//                 <p className="text-white/80 mt-4">Details will be fetched from MongoDB...</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="max-w-6xl mx-auto pt-20">
//           <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>
//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all">
//             <div className="space-y-4 text-white/80">
//               <p>Email: example@email.com</p>
//               <p>LinkedIn: linkedin.com/in/username</p>
//               <p>GitHub: github.com/username</p>
//               <p>Additional contact details will be fetched from MongoDB...</p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;



// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const Portfolio = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <main className="relative w-screen min-h-screen overflow-x-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="fixed inset-0 w-full h-full bg-cover bg-center bg-fixed z-0"
//         style={{
//           backgroundImage: 'url("src/images/pexels.jpg")', // Replace with your image URL
//         }}
//       >
//         {/* Dark overlay to ensure text readability */}
//         <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-black/20 backdrop-blur-md rounded-full flex gap-2 p-1">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors capitalize text-sm"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Content Container - Everything after nav */}
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <div className="space-y-6">
//             <h1 className="text-9xl font-bold text-white tracking-tight">
//               Harshita Khajuria
//             </h1>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
//               Frontend Developer & Data Scientist passionate about creating beautiful, functional web experiences
//             </p>
//             <button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 animate-bounce inline-block"
//               aria-label="Scroll to content"
//             >
//               <ChevronDown className="text-white/80 hover:text-white transition-colors" size={36} />
//             </button>
//           </div>
//         </section>

//         {/* Content Sections */}
//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           {/* Education Section */}
//           <section id="education" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
//             <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all">
//               <h3 className="text-xl font-semibold text-white">University Name</h3>
//               <p className="text-white/60 mt-1">Degree • Year - Year</p>
//               <p className="text-white/80 mt-4">Details will be fetched from MongoDB...</p>
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section id="projects" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {[1, 2, 3, 4].map((project) => (
//                 <div
//                   key={project}
//                   className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all"
//                 >
//                   <h3 className="text-xl font-semibold text-white mb-4">Project {project}</h3>
//                   <p className="text-white/60">Details will be fetched from MongoDB...</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
//             <div className="space-y-8">
//               {[1, 2].map((exp) => (
//                 <div 
//                   key={exp}
//                   className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all"
//                 >
//                   <h3 className="text-xl font-semibold text-white">Company Name</h3>
//                   <p className="text-white/60 mt-1">Position • Duration</p>
//                   <p className="text-white/80 mt-4">Details will be fetched from MongoDB...</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section id="contact" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>
//             <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all">
//               <div className="space-y-4 text-white/80">
//                 <p>Email: example@email.com</p>
//                 <p>LinkedIn: linkedin.com/in/username</p>
//                 <p>GitHub: github.com/username</p>
//                 <p>Additional contact details will be fetched from MongoDB...</p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// const Portfolio = () => {
//   const [internData, setInternData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInternData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/intern/Harshita');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInternData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchInternData();
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center">
//         <div className="text-white text-xl">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <main className="relative w-screen min-h-screen overflow-x-hidden">
//       <div 
//         className="fixed inset-0 w-full h-full bg-cover bg-center bg-fixed z-0"
//         style={{
//           backgroundImage: 'url("src/images/pexels.jpg")',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
//       </div>

//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-black/20 backdrop-blur-md rounded-full flex gap-2 p-1">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors capitalize text-sm"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       <div className="relative z-10">
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <div className="space-y-6">
//             <h1 className="text-9xl font-bold text-white tracking-tight">
//               {internData?.name || 'Loading...'}
//             </h1>
//             <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
//               Frontend Developer & Data Scientist passionate about creating beautiful, functional web experiences
//             </p>
//             <button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 animate-bounce inline-block"
//               aria-label="Scroll to content"
//             >
//               <ChevronDown className="text-white/80 hover:text-white transition-colors" size={36} />
//             </button>
//           </div>
//         </section>

//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           <section id="education" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
//             <div className="space-y-8">
//               {internData?.education?.map((edu, index) => (
//                 <div key={index} className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all">
//                   <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
//                   <p className="text-white/60 mt-1">
//                     {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section id="projects" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {internData?.projects?.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all"
//                 >
//                   <h3 className="text-xl font-semibold text-white mb-4">{project.name}</h3>
//                   <p className="text-white/80 mb-4">{project.description}</p>
//                   <p className="text-white/70">Tech Stack: {project.techStack}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section id="experience" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
//             <div className="space-y-8">
//               {internData?.experiences?.map((experiences, index) => (
//                 <div 
//                   key={index}
//                   className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all"
//                 >
//                   <h3 className="text-xl font-semibold text-white">{experiences.title}</h3>
//                   <p className="text-white/60 mt-1">
//                     {experiences.company} • {experiences.startDate} - {experiences.isCurrentJob ? 'Present' : experiences.endDate}
//                   </p>
//                   <p className="text-white/80 mt-4">{experiences.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

// {/* Experience Section */}
// {/* <section id="experience" className="max-w-6xl mx-auto pt-20">
//   <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
//   <div className="space-y-8">
//     {Array.isArray(internData?.experiences) && internData.experiences.map((exp, index) => (
//       <div 
//         key={index}
//         className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all"
//       >
//         <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
//         <p className="text-white/60 mt-1">
//           {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
//         </p>
//         <p className="text-white/80 mt-4">{exp.description}</p>
//       </div>
//     ))}
//   </div>
// </section> */}

//           <section id="contact" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>
//             <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 hover:bg-black/40 transition-all">
//               <div className="space-y-4 text-white/80">
//                 <p>Email: {internData?.email}</p>
//                 <p>Phone: {internData?.phone}</p>
//                 <p>Github link: <href>https://github.com/Har2810</href></p>

//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// const Portfolio = () => {
//   const [internData, setInternData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInternData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/intern/Harshita');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInternData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchInternData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       year: 'numeric' 
//     });
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-teal-950 to-black">
//         <div className="text-teal-200 text-xl">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-teal-950 to-black">
//         <div className="text-teal-200 text-xl">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <main className="relative w-screen min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-teal-950 to-black">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-teal-950/50 shadow-lg backdrop-blur-sm rounded-full flex gap-2 p-1">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-teal-200/80 hover:text-teal-100 hover:bg-teal-900/30 rounded-full transition-all capitalize text-sm"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <div className="space-y-6">
//             <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400 tracking-tight">
//               {internData?.name || 'Loading...'}
//             </h1>
//             <p className="text-lg text-teal-200/80 max-w-2xl mx-auto leading-relaxed">
//               Frontend Developer & Data Scientist passionate about creating beautiful, functional web experiences
//             </p>
//             <button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 animate-bounce inline-block"
//               aria-label="Scroll to content"
//             >
//               <ChevronDown className="text-teal-200/80 hover:text-teal-200 transition-colors" size={36} />
//             </button>
//           </div>
//         </section>

//         {/* Content Sections */}
//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           {/* Education Section */}
//           <section id="education" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-teal-200 mb-12">Education</h2>
//             <div className="space-y-8">
//               {internData?.education?.map((edu, index) => (
//                 <div key={index} className="bg-teal-950/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-teal-950/40 transition-all border border-teal-900/30 shadow-lg">
//                   <h3 className="text-xl font-semibold text-teal-100">{edu.institution}</h3>
//                   <p className="text-teal-200/60 mt-1">
//                     {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section id="projects" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-teal-200 mb-12">Projects</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {internData?.projects?.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-teal-950/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-teal-950/40 transition-all border border-teal-900/30 shadow-lg"
//                 >
//                   <h3 className="text-xl font-semibold text-teal-100 mb-4">{project.name}</h3>
//                   <p className="text-teal-200/80 mb-4">{project.description}</p>
//                   <p className="text-teal-200/60">Tech Stack: {project.techStack}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-teal-200 mb-12">Experience</h2>
//             <div className="space-y-8">
//               {internData?.experiences?.map((exp, index) => (
//                 <div 
//                   key={index}
//                   className="bg-teal-950/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-teal-950/40 transition-all border border-teal-900/30 shadow-lg"
//                 >
//                   <h3 className="text-xl font-semibold text-teal-100">{exp.title}</h3>
//                   <p className="text-teal-200/60 mt-1">
//                     {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
//                   </p>
//                   <p className="text-teal-200/80 mt-4">{exp.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section id="contact" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-teal-200 mb-12">Contact Me</h2>
//             <div className="bg-teal-950/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-teal-950/40 transition-all border border-teal-900/30 shadow-lg">
//               <div className="space-y-4 text-teal-200/80">
//                 <p>Email: {internData?.email}</p>
//                 <p>Phone: {internData?.phone}</p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// const Portfolio = () => {
//     // const Portfolio = () => {
//   const [internData, setInternData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInternData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/intern/Harshita');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInternData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchInternData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       year: 'numeric' 
//     });
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-teal-950 to-black">
//         <div className="text-teal-200 text-xl">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-teal-950 to-black">
//         <div className="text-teal-200 text-xl">Error: {error}</div>
//       </div>
//     );
//   }

//   // ... keeping all the existing state and functions the same ...

//   return (
//     // <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
//     //   {/* Background gradients */}
//     //   <div className="fixed inset-0 bg-gradient-to-br from-black via-teal-950/20 to-black" />
//     //   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent" />
//     //   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-950/20 via-transparent to-transparent" />
//     <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
//   {/* Background gradients */}
//   <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent" />

//   {/* <main className="relative w-screen min-h-screen overflow-x-hidden bg-purple-950">
//   {/* Background gradients */}
//   {/* <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-700/40 to-blue-900" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/30 via-transparent to-transparent" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/40 via-transparent to-transparent" />
//   <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/30 via-transparent to-transparent" /> } */}




//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4">
//         <div className="bg-black/50 shadow-lg backdrop-blur-sm rounded-full flex gap-2 p-1 border border-teal-950/30">
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-gray-400 hover:text-teal-200 hover:bg-black/50 rounded-full transition-all capitalize text-sm"
//             >
//               {section}
//             </button>
//           ))}
//         </div>
//       </nav>

//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <div className="space-y-6">
//             <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-teal-200/70 to-gray-100 tracking-tight">
//               {internData?.name || 'Loading...'}
//             </h1>
//             <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
//               Final Year CSE Student. Interested to explore opportunities and passionate about creating beautiful, functional web experiences.
//             </p>
//             <button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 animate-bounce inline-block"
//               aria-label="Scroll to content"
//             >
//               <ChevronDown className="text-gray-400 hover:text-teal-200 transition-colors" size={36} />
//             </button>
//           </div>
//         </section>

//         {/* Content Sections */}
//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           {/* Education Section */}
//           <section id="education" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-gray-100 mb-12">Education</h2>
//             <div className="space-y-8">
//               {internData?.education?.map((edu, index) => (
//                 <div key={index} className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-teal-950/20 shadow-lg group">
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-teal-200 transition-colors">{edu.institution}</h3>
//                   <p className="text-gray-500 mt-1">
//                     {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section id="projects" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-gray-100 mb-12">Projects</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {internData?.projects?.map((project, index) => (
//                 <div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-teal-950/20 shadow-lg group"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-teal-200 transition-colors mb-4">{project.name}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <p className="text-gray-500">Tech Stack: {project.techStack}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-gray-100 mb-12">Experience</h2>
//             <div className="space-y-8">
//               {internData?.experiences?.map((exp, index) => (
//                 <div 
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-teal-950/20 shadow-lg group"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-teal-200 transition-colors">{exp.title}</h3>
//                   <p className="text-gray-500 mt-1">
//                     {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
//                   </p>
//                   <p className="text-gray-400 mt-4">{exp.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section id="contact" className="max-w-6xl mx-auto pt-20">
//             <h2 className="text-4xl font-bold text-gray-100 mb-12">Contact Me</h2>
//             <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-teal-950/20 shadow-lg group">
//               <div className="space-y-4 text-gray-400">
//                 <p>Email: {internData?.email}</p>
//                 <p>Phone: {internData?.phone}</p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;

//working with geometric shapes properly.

// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const FloatingShape = ({ className, animationProps }) => (
//   <motion.div
//     className={`absolute rounded-2xl bg-gradient-to-r ${className}`}
//     animate={animationProps}
//     transition={{
//       duration: Math.random() * 10 + 10,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut"
//     }}
//   />
// );

// const Portfolio = () => {
//   const [internData, setInternData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { scrollY } = useScroll();
//   const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

//   useEffect(() => {
//     const fetchInternData = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/intern/Harshita');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInternData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchInternData();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       year: 'numeric' 
//     });
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Enhanced animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0,
//       rotateX: 45,
//       y: 100
//     },
//     visible: {
//       opacity: 1,
//       rotateX: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
//         <motion.div 
//           className="text-purple-200 text-xl"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 360],
//             borderRadius: ["20%", "50%", "20%"]
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full" />
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
//         <motion.div 
//           className="text-purple-200 text-xl"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring" }}
//         >
//           Error: {error}
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
//       {/* Animated Background Shapes */}
//       <div className="fixed inset-0 overflow-hidden">
//         <FloatingShape 
//           className="from-purple-500/20 to-pink-500/20 w-64 h-64 -left-32"
//           animationProps={{ 
//             x: [-100, 100],
//             y: [-50, 50],
//             rotate: [0, 180]
//           }}
//         />
//         <FloatingShape 
//           className="from-blue-500/20 to-teal-500/20 w-96 h-96 right-0 top-1/4"
//           animationProps={{ 
//             x: [100, -100],
//             y: [100, -100],
//             rotate: [180, 0]
//           }}
//         />
//         <FloatingShape 
//           className="from-pink-500/20 to-purple-500/20 w-72 h-72 bottom-0 left-1/4"
//           animationProps={{ 
//             x: [-50, 50],
//             y: [50, -50],
//             rotate: [-90, 90]
//           }}
//         />
//       </div>

//       <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />

//       <motion.nav 
//         className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100 }}
//       >
//         <motion.div 
//           className="bg-black/50 shadow-lg backdrop-blur-sm rounded-full flex gap-2 p-1 border border-purple-950/30"
//           whileHover={{ scale: 1.02 }}
//         >
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <motion.button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-gray-400 hover:text-purple-200 hover:bg-black/50 rounded-full transition-all capitalize text-sm"
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: "rgba(147, 51, 234, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {section}
//             </motion.button>
//           ))}
//         </motion.div>
//       </motion.nav>

//       <div className="relative z-10">
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <motion.div 
//             className="space-y-6"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ 
//               type: "spring",
//               stiffness: 100,
//               duration: 1 
//             }}
//           >
//             <motion.h1 
//               className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 tracking-tight"
//               animate={{ 
//                 backgroundPosition: ['0%', '100%'],
//                 filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
//               }}
//               transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//             >
//               {internData?.name || 'Loading...'}
//             </motion.h1>
//             <motion.p 
//               className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Final Year CSE Student. Interested to explore opportunities and passionate about creating beautiful, functional web experiences.
//             </motion.p>
//             <motion.button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 inline-block"
//               aria-label="Scroll to content"
//               animate={{ 
//                 y: [0, 10, 0],
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <ChevronDown className="text-purple-300 hover:text-purple-200 transition-colors" size={36} />
//             </motion.button>
//           </motion.div>
//         </section>

//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           <motion.section 
//             id="education" 
//             className="max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-4xl font-bold text-gray-100 mb-12"
//               variants={cardVariants}
//             >
//               Education
//             </motion.h2>
//             <div className="space-y-8">
//               {internData?.education?.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-purple-950/20 shadow-lg group"
//                   variants={cardVariants}
//                   whileHover={{ 
//                     scale: 1.05,
//                     rotateZ: 1,
//                     boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-200 transition-colors">
//                     {edu.institution}
//                   </h3>
//                   <p className="text-gray-500 mt-1">
//                     {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           <motion.section 
//             id="projects" 
//             className="max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-4xl font-bold text-gray-100 mb-12"
//               variants={cardVariants}
//             >
//               Projects
//             </motion.h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               {internData?.projects?.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-purple-950/20 shadow-lg group"
//                   variants={cardVariants}
//                   whileHover={{ 
//                     scale: 1.05,
//                     rotateY: 5,
//                     boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-200 transition-colors mb-4">
//                     {project.name}
//                   </h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <p className="text-gray-500">Tech Stack: {project.techStack}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           <motion.section 
//             id="experience" 
//             className="max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-4xl font-bold text-gray-100 mb-12"
//               variants={cardVariants}
//             >
//               Experience
//             </motion.h2>
//             <div className="space-y-8">
//               {internData?.experiences?.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-purple-950/20 shadow-lg group"
//                   variants={cardVariants}
//                   whileHover={{ 
//                     scale: 1.05,
//                     rotateX: 2,
//                     boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-purple-200 transition-colors">
//                     {exp.title}
//                   </h3>
//                   <p className="text-gray-500 mt-1">
//                     {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
//                   </p>
//                   <p className="text-gray-400 mt-4">{exp.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           <motion.section 
//             id="contact" 
//             className="max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-4xl font-bold text-gray-100 mb-12"
//               variants={cardVariants}
//             >
//               Contact Me
//             </motion.h2>
//             <motion.div
//               className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-purple-950/20 shadow-lg group"
//               variants={cardVariants}
//               whileHover={{ 
//                 scale: 1.05,
//                 rotateZ: -1,
//                 boxShadow: "0 0 30px rgba(147, 51, 234, 0.2)"
//               }}
//             >
//               <div className="space-y-4 text-gray-400">
//                 <p>Email: {internData?.email}</p>
//                 <p>Phone: {internData?.phone}</p>
//               </div>
//             </motion.div>
//           </motion.section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import project1 from '/src/images/project1.jpg';
// import project2 from '/src/images/project2.jpg';
// import project3 from '/src/images/project3.jpg';
// import project4 from '/src/images/project4.png';
// import harshita from '/src/assets/Harshita.jpg';



// // Floating shape component with more variety
// const FloatingShape = ({ className, animationProps }) => (
//   <motion.div
//     className={`absolute rounded-2xl bg-gradient-to-r ${className}`}
//     animate={animationProps}
//     transition={{
//       duration: Math.random() * 10 + 10,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut"
//     }}
//   />
// );

// // Decorative border component
// const SectionBorder = () => (
//   <div className="absolute inset-0 pointer-events-none">
//     <div className="absolute top-0 left-0 w-1/3 h-1/3 border-l-2 border-t-2 border-pink-800/50 rounded-tl-3xl" />
//     <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-r-2 border-b-2 border-pink-800/50 rounded-br-3xl" />
//   </div>
// );

// // Section heading decorator component
// const SectionDecorator = ({ title }) => (
//   <div className="flex items-center gap-4 mb-12">
//     <div className="h-[2px] w-12 bg-pink-800" />
//     <div className="w-3 h-3 rounded-full bg-pink-800" />
//     <h2 className="text-4xl font-bold text-gray-100">{title}</h2>
//   </div>
// );

// // Circular scroll progress indicator
// const ScrollProgress = () => {
//   const { scrollYProgress } = useScroll();
//   const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

//   return (
//     <motion.div 
//       className="fixed bottom-8 right-8 w-16 h-16 z-50"
//       style={{ rotate: rotation }}
//     >
//       <svg viewBox="0 0 100 100" className="transform -rotate-90">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           fill="none"
//           stroke="#3f3f46"
//           strokeWidth="5"
//         />
//         <motion.circle
//           cx="50"
//           cy="50"
//           r="45"
//           fill="none"
//           stroke="#be185d"
//           strokeWidth="5"
//           strokeDasharray="283"
//           style={{
//             strokeDashoffset: useTransform(scrollYProgress, [0, 1], [283, 0])
//           }}
//         />
//       </svg>
//     </motion.div>
//   );
// };

// const Portfolio = () => {
//   const [internData, setInternData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { scrollY } = useScroll();
//   const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

//   useEffect(() => {
//     const fetchInternData = async () => {
//       try {
//         // const response = await fetch('http://localhost:8080/intern/Harshita');
//         const response = await fetch('http://localhost:8080/intern/Harshita%20Khajuria');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setInternData(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchInternData();
//   }, []);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDescriptionIndex((prevIndex) => 
//         prevIndex === descriptions.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Changes every 3 seconds
  
//     return () => clearInterval(interval);
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       year: 'numeric' 
//     });
//   };
//   // Add this near the top of your Portfolio component, before the return statement
//   const projectImages = {
//     "Shop Management System": project1,
//     "AI-Powered Car Guide Website": project2,
//     "Migrating Monolithic Application to Microservices Architecture": project3,
//     "Blockchain-Based Decentralized Voting System": project4
//   };
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   // Enhanced animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0,
//       rotateX: 45,
//       y: 100
//     },
//     visible: {
//       opacity: 1,
//       rotateX: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };
//   const [descriptionIndex, setDescriptionIndex] = useState(0);
//   const descriptions = [
//   "Software developer",
//   "Enthusiastic learner",
//   "Badminton lover"
// ];

//   // Enhanced project card animation variants
//   const projectCardVariants = {
//     hidden: { 
//       opacity: 0,
//       scale: 0.8,
//       rotateY: -30
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotateY: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     },
//     hover: {
//       scale: 1.05,
//       rotateY: 5,
//       boxShadow: "0 0 30px rgba(190, 24, 93, 0.3)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
//         <motion.div 
//           className="text-pink-200 text-xl"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             rotate: [0, 360],
//             borderRadius: ["20%", "50%", "20%"]
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
//         <motion.div 
//           className="text-pink-200 text-xl"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ type: "spring" }}
//         >
//           Error: {error}
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
//       {/* Enhanced Animated Background Shapes */}
//       <div className="fixed inset-0 overflow-hidden">
//         <FloatingShape 
//           className="from-pink-500/20 to-purple-500/20 w-64 h-64 -left-32"
//           animationProps={{ 
//             x: [-100, 100],
//             y: [-50, 50],
//             rotate: [0, 180]
//           }}
//         />
//         <FloatingShape 
//           className="from-purple-500/20 to-pink-500/20 w-96 h-96 right-0 top-1/4"
//           animationProps={{ 
//             x: [100, -100],
//             y: [100, -100],
//             rotate: [180, 0]
//           }}
//         />
//         <FloatingShape 
//           className="from-pink-500/20 to-purple-500/20 w-72 h-72 bottom-0 left-1/4"
//           animationProps={{ 
//             x: [-50, 50],
//             y: [50, -50],
//             rotate: [-90, 90]
//           }}
//         />
//         {/* Additional geometric shapes */}
//         <FloatingShape 
//           className="from-purple-600/10 to-pink-600/10 w-48 h-48 top-1/3 left-1/3"
//           animationProps={{ 
//             scale: [1, 1.2],
//             rotate: [45, -45]
//           }}
//         />
//         <FloatingShape 
//           className="from-pink-600/10 to-purple-600/10 w-56 h-56 bottom-1/4 right-1/4"
//           animationProps={{ 
//             scale: [1.2, 1],
//             rotate: [-45, 45]
//           }}
//         />
//       </div>

//       <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />

//       {/* Scroll Progress Indicator */}
//       <ScrollProgress />

//       <motion.nav 
//         className="fixed top-0 left-0 w-screen z-50 flex justify-center p-4"
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100 }}
//       >
//         <motion.div 
//           className="bg-black/50 shadow-lg backdrop-blur-sm rounded-full flex gap-2 p-1 border border-pink-950/30"
//           whileHover={{ scale: 1.02 }}
//         >
//           {['education', 'projects', 'experience', 'contact'].map((section) => (
//             <motion.button
//               key={section}
//               onClick={() => scrollToSection(section)}
//               className="px-6 py-2 text-gray-400 hover:text-pink-200 hover:bg-black/50 rounded-full transition-all capitalize text-sm"
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: "rgba(190, 24, 93, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {section}
//             </motion.button>
//           ))}
//         </motion.div>
//       </motion.nav>

//       {/* <div className="relative z-10">
//         <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//           <motion.div 
//             className="space-y-6"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ 
//               type: "spring",
//               stiffness: 100,
//               duration: 1 
//             }}
//           >
//             <motion.h1 
//               className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 tracking-tight"
//               animate={{ 
//                 backgroundPosition: ['0%', '100%'],
//                 filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
//               }}
//               transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//             >
//               {internData?.name || 'Loading...'}
//             </motion.h1>
//             <motion.p 
//               className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//             >
//               Final Year CSE Student. Interested to explore opportunities and passionate about creating beautiful, functional web experiences.
//             </motion.p>
//             <motion.button
//               onClick={() => scrollToSection('education')}
//               className="mt-12 inline-block"
//               aria-label="Scroll to content"
//               animate={{ 
//                 y: [0, 10, 0],
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <ChevronDown className="text-pink-300 hover:text-pink-200 transition-colors" size={36} />
//             </motion.button>
//           </motion.div>
//         </section> */}

// <div className="relative z-10">
//   {/* <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//     <motion.div 
//       className="space-y-6"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ 
//         type: "spring",
//         stiffness: 100,
//         duration: 1 
//       }}
//     >
//       <motion.h1 
//         className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 tracking-tight"
//         animate={{ 
//           backgroundPosition: ['0%', '100%'],
//           filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
//         }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//       >
//         {internData?.name || 'Loading...'}
//       </motion.h1>
//       <motion.p 
//         key={descriptionIndex}
//         className="text-4xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//       >
//         {descriptions[descriptionIndex]}
//       </motion.p>
//       <motion.button
//         onClick={() => scrollToSection('education')}
//         className="mt-12 inline-block"
//         aria-label="Scroll to content"
//         animate={{ 
//           y: [0, 10, 0],
//           scale: [1, 1.1, 1]
//         }}
//         transition={{ 
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       >
//         <ChevronDown className="text-pink-300 hover:text-pink-200 transition-colors" size={36} />
//       </motion.button>
//     </motion.div>
//   </section> */}
//       <section className="w-screen h-screen flex flex-col items-center justify-center text-center p-4">
//   <motion.div 
//     className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl mx-auto"
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ 
//       type: "spring",
//       stiffness: 100,
//       duration: 1 
//     }}
//   >
//     {/* Photo on the left */}
//     <motion.div
//       className="w-64 h-64 md:w-96 md:h-96 relative"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 0.2 }}
//     >
//       <img 
//         src={harshita} 
//         alt="Profile"
//         className="w-full h-full object-cover rounded-full border-4 border-pink-500/30"
//       />
//       {/* Optional decorative circle */}
//       <div className="absolute inset-0 rounded-full border-2 border-pink-500/20 -m-2 animate-pulse" />
//     </motion.div>

//     {/* Name and description */}
//     <div className="flex flex-col items-center md:items-start space-y-6">
//       <motion.h1 
//         className="text-8xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 tracking-tight text-center md:text-left"
//         animate={{ 
//           backgroundPosition: ['0%', '100%'],
//           filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
//         }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//       >
//         {internData?.name || 'Loading...'}
//       </motion.h1>

//       <motion.p 
//         key={descriptionIndex}
//         className="text-2xl text-gray-400 leading-relaxed font-semibold"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//       >
//         {descriptions[descriptionIndex]}
//       </motion.p>
//     </div>
//   </motion.div>

//   {/* Scroll button */}
//   <motion.button
//     onClick={() => scrollToSection('education')}
//     className="mt-12 inline-block"
//     aria-label="Scroll to content"
//     animate={{ 
//       y: [0, 10, 0],
//       scale: [1, 1.1, 1]
//     }}
//     transition={{ 
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   >
//     <ChevronDown className="text-pink-300 hover:text-pink-200 transition-colors" size={36} />
//   </motion.button>
// </section>

//         <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
//           <motion.section 
//             id="education" 
//             className="relative max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <SectionBorder />
//             <SectionDecorator title="Education" />
//             <div className="space-y-8">
//               {internData?.education?.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
//                   variants={cardVariants}
//                   whileHover={{ 
//                     scale: 1.05,
//                     rotateZ: 1,
//                     boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
//                     {edu.institution}
//                   </h3>
//                   <p className="text-gray-500 mt-1">
//                     {edu.startYear} - {edu.endYear} • CGPA: {edu.cgpa}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           <motion.section 
//             id="projects" 
//             className="relative max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <SectionBorder />
//             <SectionDecorator title="Projects" />
//             <div className="grid md:grid-cols-2 gap-8 perspective-1000">
//               {/* {internData?.projects?.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group transform-gpu"
//                   variants={projectCardVariants}
//                   whileHover="hover"
//                 >
//                   <div className="relative z-10">
//                     <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors mb-4">
//                       {project.name}
//                     </h3>
//                     <p className="text-gray-400 mb-4">{project.description}</p>
//                     <p className="text-gray-500">Tech Stack: {project.techStack}</p>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-pink-900/5 to-purple-900/5 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
//                 </motion.div> */}

// {internData?.projects?.map((project, index) => (
//   <motion.div
//     key={index}
//     className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
//     variants={projectCardVariants}
//     whileHover="hover"
//   >
//     <div className="relative z-10 space-y-4">
//       {/* Image container */}
//       <div className="relative h-48 w-full overflow-hidden rounded-lg">
//         <img
//           src={projectImages[project.name] || "/images/default-project.jpg"}
//           alt={project.name}
//           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//         />
//       </div>
      
//       <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
//         {project.name}
//       </h3>
//       <p className="text-gray-400">{project.description}</p>
//       <p className="text-gray-500">Tech Stack: {project.techStack}</p>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-r from-pink-900/5 to-purple-900/5 rounded-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
//   </motion.div>
//               ))}

// </div>
//           </motion.section>

//           <motion.section 
//             id="experience" 
//             className="relative max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <SectionBorder />
//             <SectionDecorator title="Experience" />
//             <div className="space-y-8">
//               {internData?.experiences?.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
//                   variants={cardVariants}
//                   whileHover={{ 
//                     scale: 1.05,
//                     rotateX: 2,
//                     boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
//                   }}
//                 >
//                   <h3 className="text-xl font-semibold text-gray-100 group-hover:text-pink-200 transition-colors">
//                     {exp.title}
//                   </h3>
//                   <p className="text-gray-500 mt-1">
//                     {exp.company} • {formatDate(exp.startDate)} - {exp.currentJob ? 'Present' : formatDate(exp.endDate)}
//                   </p>
//                   <p className="text-gray-400 mt-4">{exp.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           <motion.section 
//             id="contact" 
//             className="relative max-w-6xl mx-auto pt-20"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <SectionBorder />
//             <SectionDecorator title="Contact Me" />
//             <motion.div
//               className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/80 transition-all border border-pink-950/20 shadow-lg group"
//               variants={cardVariants}
//               whileHover={{ 
//                 scale: 1.05,
//                 rotateZ: -1,
//                 boxShadow: "0 0 30px rgba(190, 24, 93, 0.2)"
//               }}
//             >
//               <div className="space-y-4 text-gray-400">
//                 <p>Email: {internData?.email}</p>
//                 <p>Phone: {internData?.phone}</p>
//               </div>
//             </motion.div>
//           </motion.section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { LoadingSpinner } from './components/common/LoadingSpinner';
import { ErrorMessage } from './components/common/ErrorMessage';
import { BackgroundShapes } from './components/shapes/BackgroundShapes';
import { ScrollProgress } from './components/navigation/ScrollProgress';
import { Navigation } from './components/navigation/Navigation';
import { Hero } from './components/sections/Hero';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { containerVariants, cardVariants, projectCardVariants } from './constants/animations';
import { descriptions } from './constants/descriptions';

const Harshita = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const fetchInternData = async () => {
      try {
        const response = await fetch('http://localhost:8080/intern/Harshita%20Khajuria');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setInternData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInternData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptionIndex((prevIndex) => 
        prevIndex === descriptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden bg-black">
      <BackgroundShapes />
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />

      <ScrollProgress />
      <Navigation scrollToSection={scrollToSection} />

      <div className="relative z-10">
        <Hero 
          internData={internData}
          descriptions={descriptions}
          descriptionIndex={descriptionIndex}
          scrollToSection={scrollToSection}
        />

        <div className="w-screen px-4 md:px-8 space-y-32 pb-32">
          <Education 
            education={internData?.education}
            containerVariants={containerVariants}
            cardVariants={cardVariants}
          />
          <Projects 
            projects={internData?.projects}
            containerVariants={containerVariants}
            projectCardVariants={projectCardVariants}
          />
          <Experience 
            experiences={internData?.experiences}
            containerVariants={containerVariants}
            cardVariants={cardVariants}
          />
          <Contact 
            email={internData?.email}
            phone={internData?.phone}
            containerVariants={containerVariants}
            cardVariants={cardVariants}
          />
        </div>
      </div>
    </main>
  );
};

export default Harshita;