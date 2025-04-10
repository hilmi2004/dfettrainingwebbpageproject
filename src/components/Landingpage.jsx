import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Landingpage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white pt-9 overflow-hidden w-screen max-w-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-0">
                {/* Navbar */}
                <nav className="flex w-full items-center justify-between px-4 py-3 md:py-4 md:px-8 md:bg-gray-900 md:rounded-full relative">
                    {/* Mobile View: Kemo on Left */}
                    <h2 className="text-black text-2xl font-bold md:hidden">
                        Kemo
                    </h2>

                    {/* Navigation Links (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-1 justify-between items-center">
                        {/* Left Side Links */}
                        <div className="flex gap-4 lg:gap-6">
                            <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                About
                            </a>
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Service
                            </a>
                        </div>

                        {/* Centered Kemo */}
                        <h2 className="text-orange-500 text-3xl lg:text-4xl font-bold mx-4 lg:mx-8">
                            Kemo
                        </h2>

                        {/* Right Side Links */}
                        <div className="flex gap-4 lg:gap-6">
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Resume
                            </a>
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Project
                            </a>
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Testimonials
                            </a>
                            <a href="#" className="text-white hover:bg-gray-700 rounded-full py-2 px-4 lg:px-6 font-medium transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hidden on Desktop) */}
                    <button
                        className="md:hidden bg-black text-white p-2 rounded-full transition-transform hover:scale-110"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu size={24} />
                    </button>
                </nav>

                {/* Mobile Navbar */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white text-lg z-50 p-4">
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        {/* Menu Links */}
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Service</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Resume</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Project</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Testimonials</a>
                        <a href="#" className="hover:text-orange-500 transition-colors text-xl py-2" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Landingpage;