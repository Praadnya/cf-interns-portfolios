import React from 'react';

const Experience = ({ experiences }) => {
  if (!Array.isArray(experiences) || experiences.length === 0) {
    return <div className="text-center py-10 text-gray-500">No experience data available.</div>;
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-purple-100 to-indigo-200">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-t from-teal-500 to-teal-200 hidden md:block"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 flex md:items-center relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute -left-6 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full border-4 border-white shadow-lg transform transition-all hover:scale-125"></div>

              <div className="bg-white p-8 rounded-xl shadow-xl w-full md:ml-8 border-l-8 border-gradient-to-r from-indigo-500 to-pink-500 transform transition-all hover:scale-105">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800 hover:text-indigo-700 transition-colors duration-300">{exp.title}</h3>
                    <p className="text-gray-600 text-xl">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-lg">{exp.period}</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{exp.description || "No description available."}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
