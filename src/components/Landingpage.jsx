import React from 'react';

const Landingpage = () => {
    return (
        <div className="bg-white mx-auto pt-9 overflow-hidden w-screen max-w-screen">
            <div className="container mx-auto pb-0">
                <nav className="bg-gray-900 rounded-3xl py-6">
                    <ul className="flex items-center justify-center space-x-20 text-2xl">
                        <li>
                            <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 rounded-3xl py-4 px-8">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:bg-gray-600 rounded-3xl py-3 px-6">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Landingpage;
