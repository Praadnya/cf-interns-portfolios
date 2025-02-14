import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TerminalPortfolio = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState(['Type "start" to see available commands']);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/intern/Avani');
                setPortfolioData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
                setOutput(prev => [...prev, 'Error loading portfolio data. Please try again later.']);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const formatProjects = () => {
        if (!portfolioData) return ['Loading projects...'];
        return portfolioData.projects.map(project => (
            `⊱ ${project.name} ⊰
  Tech Stack: ${project.techStack}
  Description: ${project.description}
`
        ));
    };

    const formatExperience = () => {
        if (!portfolioData) return ['Loading experience...'];
        return portfolioData.experiences.map(exp => (
            `⊱ ${exp.title} at ${exp.company} ⊰
  ${new Date(exp.startDate).toLocaleDateString()} - ${new Date(exp.endDate).toLocaleDateString()}
  ${exp.description}
`
        ));
    };

    const formatEducation = () => {
        if (!portfolioData) return ['Loading education...'];
        return portfolioData.education.map(edu => (
            `⊱ ${edu.institution} ⊰
  ${edu.startYear} - ${edu.endYear}
  CGPA: ${edu.cgpa}
`
        ));
    };

    const formatSkills = () => {
        const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Docker', 'AWS', 'Machine Learning'];
        return `⊱ Technical Skills ⊰
  ${skills.join(' • ')}`;
    };

    const formatContact = () => {
        if (!portfolioData) return 'Loading...';
        return `⊱ Contact Information ⊰
  Email: ${portfolioData.email}
  Phone: ${portfolioData.phone}`;
    };

    const commands = {
        start: `Available commands:
• about     - Learn about me
• skills    - View my technical skills
• projects  - Browse my projects
• experience- View my work experience
• education - See my educational background
• contact   - Get my contact information
• clear     - Clear the terminal`,
        about: () => portfolioData ?
            `⊱ About Me ⊰
Hi, I'm ${portfolioData.name}, a passionate software developer.` : 'Loading...',
        skills: formatSkills,
        projects: formatProjects,
        experience: formatExperience,
        education: formatEducation,
        contact: formatContact,
        clear: 'CLEAR_COMMAND'
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.toLowerCase().trim();
            let response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd] || `Command not found: ${cmd}`;

            if (cmd === 'clear') {
                setOutput([]);
            } else {
                setOutput(prev => [...prev, `> ${input}`, ...(Array.isArray(response) ? response : [response])]);
            }
            setInput('');
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-screen bg-black text-pink-500 font-mono flex justify-center items-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="h-screen w-screen bg-black text-pink-500 font-mono flex justify-center items-center">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full bg-gray-900 border border-pink-700/50 rounded-lg overflow-hidden flex flex-col">
                    <div className="flex items-center gap-2 p-2 bg-gray-800 border-b border-pink-700/50">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-sm text-pink-300">{portfolioData?.name}'s-portfolio</span>
                    </div>

                    <div className="p-4 flex-1 overflow-auto">
                        <pre className="text-pink-500">
                            {`
    █████╗ ██╗   ██╗ █████╗ ███╗   ██╗██╗
   ██╔══██╗██║   ██║██╔══██╗████╗  ██║██║
   ███████║██║   ██║███████║██╔██╗ ██║██║
   ██╔══██║╚██╗ ██╔╝██╔══██║██║╚██╗██║██║
   ██║  ██║ ╚████╔╝ ██║  ██║██║ ╚████║██║
   ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
`}
                        </pre>
                        <p className="mb-4 text-pink-300">Welcome to my terminal portfolio!</p>

                        <div className="mt-4 space-y-4">
                            {output.map((line, i) => (
                                <div key={i} className="whitespace-pre-wrap">
                                    {line.startsWith('>') ? (
                                        <span className="text-pink-400">{line}</span>
                                    ) : line.startsWith('⊱') ? (
                                        <div>
                                            <div className="text-pink-300">{line.split('\n')[0]}</div>
                                            <div className="text-pink-500 ml-2">{line.split('\n').slice(1).join('\n')}</div>
                                        </div>
                                    ) : (
                                        <span className="text-pink-500">{line}</span>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center">
                                <span className="text-pink-500 mr-2">$</span>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleCommand}
                                    className="flex-1 bg-transparent outline-none text-pink-500"
                                    autoFocus
                                />
                                <span className={`ml-1 text-pink-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>█</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalPortfolio;