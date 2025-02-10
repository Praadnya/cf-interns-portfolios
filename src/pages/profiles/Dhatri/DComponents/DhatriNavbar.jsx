import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DhatriNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                flex justify-between items-center
                border-b border-[#233554] 
                transition-all duration-300
                ${isScrolled 
                    ? 'bg-[rgba(10,25,47,0.95)] backdrop-blur-md shadow-[0_2px_10px_rgba(100,255,218,0.15)]'
                    : 'bg-gradient-to-r from-[#0a192f] to-[#172a45] shadow-[0_1px_8px_rgba(100,255,218,0.15)]'}
            `}>
                <a href="/dhatri" 
                    className="text-[#64ffda] text-lg font-bold uppercase tracking-wide
                        font-mono relative pl-5 no-underline
                        transition-all duration-300 hover:-translate-y-0.5
                        before:content-['>'] before:absolute before:left-0 
                        before:text-[#233554] before:animate-[blink_1s_step-end_infinite]">
                    Dhatri
                </a>

                {/* Desktop Navigation */}
                <ul className={`
                    flex items-center gap-4 m-0 p-0 list-none
                    transition-all duration-300
                    md:relative md:flex md:flex-row md:top-auto md:w-auto md:bg-transparent
                    sm:fixed sm:flex-col sm:w-full sm:left-0 sm:bg-[rgba(10,25,47,0.98)]
                    sm:border-b sm:border-[#233554] sm:shadow-lg
                    ${isMobileMenuOpen ? 'sm:top-14' : 'sm:-top-full'}
                `}>
                    {[
                        { to: "/dhatri", text: "Home", end: true },
                        { to: "/dhatri/education", text: "Education" },
                        { to: "/dhatri/experience", text: "Experience" },
                        { to: "/dhatri/projects", text: "Projects" }
                    ].map((link) => (
                        <li key={link.text} className="sm:w-full">
                            <NavLink
                                to={link.to}
                                end={link.end}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `
                                    block px-3 py-1.5 
                                    text-[#64ffda] text-sm font-medium 
                                    font-mono no-underline rounded
                                    transition-all duration-300
                                    hover:-translate-y-0.5 
                                    hover:bg-[#172a45] hover:shadow-[0_0_5px_rgba(100,255,218,0.15)]
                                    sm:text-center sm:py-3 sm:px-4
                                    ${isActive 
                                        ? 'bg-[#172a45] border border-[#233554] shadow-[0_0_8px_rgba(100,255,218,0.15)]' 
                                        : ''}
                                `}>
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className="hidden sm:block text-[#64ffda] text-xl p-1 
                        hover:bg-[#172a45] rounded transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu">
                    {isMobileMenuOpen ? '×' : '☰'}
                </button>
            </nav>
        </header>
    );
}

export default DhatriNavbar;
