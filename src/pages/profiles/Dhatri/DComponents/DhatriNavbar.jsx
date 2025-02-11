import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function DhatriNavbar({ setCurrentPage, currentPage }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className={`
                w-full px-8 py-2 h-14
                flex items-center
                border-b border-[#233554] 
                transition-all duration-300
                ${isScrolled 
                    ? 'bg-[rgba(10,25,47,0.95)] backdrop-blur-md shadow-[0_2px_10px_rgba(100,255,218,0.15)]'
                    : 'bg-gradient-to-r from-[#0a192f] to-[#172a45] shadow-[0_1px_8px_rgba(100,255,218,0.15)]'}
            `}>
                {/* Left side - Projects text */}
                <div className="flex-none">
                    <a 
                        onClick={() => setCurrentPage('home')}
                        className="text-[#64ffda] text-lg font-bold uppercase tracking-wide
                            font-mono relative pl-5 no-underline cursor-pointer
                            transition-all duration-300 hover:-translate-y-0.5
                            before:content-['>'] before:absolute before:left-0 
                            before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
                        Dhatri
                    </a>
                </div>

                {/* Center - Navigation items */}
                <div className="flex-grow flex justify-center">
                    <ul className="flex items-center gap-4 m-0 p-0 list-none">
                        {[
                            { id: 'home', text: "Home", end: true },
                            { id: 'education', text: "Education" },
                            { id: 'experience', text: "Experience" },
                            { id: 'projects', text: "Projects" }
                        ].map((link) => (
                            <li key={link.text}>
                                <a
                                    onClick={() => setCurrentPage(link.id)}
                                    className={`
                                        block px-3 py-1.5 
                                        text-[#64ffda] text-sm font-medium 
                                        font-mono no-underline rounded cursor-pointer
                                        transition-all duration-300
                                        hover:-translate-y-0.5 
                                        hover:bg-[#172a45] hover:shadow-[0_0_5px_rgba(100,255,218,0.15)]
                                        ${currentPage === link.id 
                                            ? 'bg-[#172a45] border border-[#233554] shadow-[0_0_8px_rgba(100,255,218,0.15)]' 
                                            : ''}
                                    `}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Empty div for balance */}
                <div className="flex-none w-[87px]"></div> {/* Width matches the Projects text width */}
            </nav>
        </header>
    );
}

DhatriNavbar.propTypes = {
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired
};

export default DhatriNavbar;