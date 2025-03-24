import React from 'react';
import {FaBehance, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";

const Footer = () => {

    let newyear = new Date().getFullYear();
    return (
        <div className="bg-[#1E1E1E] py-16 px-4 max-w-screen w-screen overflow-hidden">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-0">
                        Let's Connect
                    </h2>
                    <button className="bg-orange-500 text-lg md:text-xl text-white px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 hover:bg-orange-600 transition duration-300 shadow-lg">
                        Hire me
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5m0 0H9m10.5 0V15" />
                        </svg>
                    </button>
                </div>

                <div className="border-b border-gray-500 my-10"></div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand & Socials */}
                    <div>
                        <div className="flex items-center space-x-4">
                            <img src="img/jclogokemo.png" alt="Logo" className="w-12 md:w-16 h-12 md:h-16" />
                            <h3 className="text-white font-bold text-2xl md:text-3xl">JCREA</h3>
                        </div>
                        <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi iste iure nobis qui.
                            Ad adipisci atque consequatur cum, deserunt dolor laboriosam nobis.
                        </p>
                        <div className="flex mt-6 space-x-4 text-xl md:text-2xl text-gray-400">
                            <FaWhatsapp className="hover:text-white transition duration-300 cursor-pointer"/>
                            <FaYoutube className="hover:text-white transition duration-300 cursor-pointer"/>
                            <FaInstagram className="hover:text-white transition duration-300 cursor-pointer"/>
                            <FaTwitter className="hover:text-white transition duration-300 cursor-pointer"/>
                            <a target="_blank" href="https://www.behance.net/omogheneefekemo"><FaBehance className="hover:text-white transition duration-300 cursor-pointer"/></a>
                        </div>
                    </div>

                    {/* Navigation & Contact */}
                    <div className="grid grid-cols-2  text-gray-300 text-sm md:text-base">
                        {/* Navigation Section */}
                        <div>
                            <h2 className="text-orange-500 mb-4 text-lg font-semibold">Navigation</h2>
                            <div className="space-y-3">
                                <p className="hover:text-white cursor-pointer">Home</p>
                                <p className="hover:text-white cursor-pointer">About</p>
                                <p className="hover:text-white cursor-pointer">Service</p>
                                <p className="hover:text-white cursor-pointer">Resume</p>
                                <p className="hover:text-white cursor-pointer">Project</p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h2 className="text-orange-500 mb-4 text-lg font-semibold">Contact</h2>
                            <div className="space-y-3">
                                <p className="hover:text-white">+2349041 695865</p>
                                <p className="hover:text-white">omoghene.v.efekemo@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Subscription Section */}
                    <div>
                        <h2 className="text-orange-500 mb-4 text-lg font-semibold">Get the latest updates</h2>
                        <div className="relative w-full ">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="p-3 md:p-4 w-full text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="absolute lg:right-3 lg:top-3 right-2 top-2 bg-orange-500 px-3 py-2 text-white rounded-lg hover:bg-orange-600 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 8-16 8V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-500 my-10"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center md:text-left">
                    <p>© {newyear} JCREA. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <p className="hover:text-white cursor-pointer">User Terms</p>
                        <p className="hover:text-white cursor-pointer">Conditions</p>
                        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
