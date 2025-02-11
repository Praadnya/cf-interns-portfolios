import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics & Communication",
      school: "BMS",
      year: "2021 - 2025",
      cgpa: 8.5,
    },
    {
      degree: "Higher Secondary Certificate",
      field: "PCM & CS",
      school: "St John's School",
      year: "2019-2020",
      percentage: 93,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-10 bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-800">{edu.degree}</h3>
                  <p className="text-lg text-indigo-600">{edu.field}</p>
                  <p className="text-md text-gray-700">{edu.school}</p>
                </div>
                <span className="text-md text-gray-500 font-semibold">{edu.year}</span>
              </div>
              <div className="flex justify-between mt-4">
                {edu.cgpa && (
                  <p className="text-gray-800 font-medium">CGPA: {edu.cgpa}</p>
                )}
                {edu.percentage && (
                  <p className="text-gray-800 font-medium">Percentage: {edu.percentage}%</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
