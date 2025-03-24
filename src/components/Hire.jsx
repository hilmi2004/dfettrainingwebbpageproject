import React from 'react';

const Hire = () => {
    return (
        <div className="bg-gray-100  min-h-screen max-w-screen w-screen overflow-hidden  flex flex-col items-center justify-center px-4 py-9">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-16 w-full max-w-6xl">
                <div className="w-full flex justify-center">
                    <img className="w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto" src="img/Component%2013.png" alt="" />
                </div>
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Why <span className="text-orange-500">Hire Me</span>?
                    </h2>
                    <ul className="space-y-3 text-lg sm:text-xl text-gray-600">
                        <li>I design easy-to-use and engaging websites/apps.</li>
                        <li>I focus on user needs to improve experience and usability.</li>
                        <li>I handle everything from research to final design.</li>
                        <li>My designs are modern, clear, and impactful.</li>
                    </ul>
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-10 space-y-4 lg:space-y-0">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold">100+</h3>
                            <p className="text-gray-400 font-semibold">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold">8+</h3>
                            <p className="text-gray-400 font-semibold">Industries Covered</p>
                        </div>
                    </div>
                    <a href="public/EFEKEMO%20VICTORY%20OMOGHENE-%20CV%20(1)%20(1).pdf" download="My_Cv.pdf">
                        <button  className="px-17 py-10 mt-8 font-semibold rounded-3xl border-1 border-black hover:bg-black hover:text-white transition duration-300">
                            Hire me
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Hire;
