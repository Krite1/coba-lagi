import React, { useState } from 'react';
import MenuIcon from './icons/MenuIcon.jsx';
import XIcon from './icons/XIcon.jsx';

// Simple SVG icons for demonstration
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = ["About", "Lainnya", "Tools", "AdSense", "Guest", "SEO", "Snippet", "Tips Blogger"];

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-8">
                         <a href="#" className="flex items-center justify-center h-10 w-10 bg-orange-500 rounded-full text-white text-2xl font-bold font-serif italic">
                            a
                        </a>
                        <nav className="hidden md:flex items-center space-x-6">
                            {navLinks.slice(0, 4).map(link => (
                                <a key={link} href="#" className="text-gray-600 hover:text-orange-500 transition-colors flex items-center">
                                    {link}
                                    {["About", "Lainnya", "Tools"].includes(link) && <ChevronDownIcon />}
                                </a>
                            ))}
                        </nav>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6">
                         {navLinks.slice(4).map(link => (
                                <a key={link} href="#" className="text-gray-600 hover:text-orange-500 transition-colors relative">
                                    {link}
                                    {link === "Guest" && <span className="absolute -top-2 -right-3 text-xs bg-yellow-400 text-black px-1.5 py-0.5 rounded-md font-semibold transform rotate-6">Read</span>}
                                </a>
                            ))}
                        <div className="flex items-center space-x-4 border-l border-gray-200 pl-6">
                            <button><MailIcon /></button>
                            <button><SettingsIcon /></button>
                            <button><SearchIcon /></button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            {isOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col items-start space-y-2 p-4">
                        {navLinks.map(link => (
                             <a key={link} href="#" className="text-gray-600 hover:text-orange-500 transition-colors w-full py-2" onClick={() => setIsOpen(false)}>
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;