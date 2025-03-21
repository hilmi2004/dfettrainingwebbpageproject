import React from 'react';

const Landingpageback = () => {
    return (
        <div>
            <div className="relative flex flex-col items-center justify-center mt-10 max-w-screen w-screen overflow-hidden">
                <div className="relative">
                    <h4 className="border-2 border-black p-3 rounded-3xl w-[7rem] text-center">
                        Hello
                    </h4>
                    <img className="absolute -top-6 -right-5 h-[2rem]" src="img/Vector%202.png" alt="" />
                </div>
                <div className="text-center">
                    <h1 className="text-8xl font-semibold leading-tight">
                        I'm <span className="text-orange-600">Kemo</span>,<br />
                        <div className="typewriter" id="typewriter">Product Designer</div>
                        <span className="absolute left-90 top-60">
                            <img className="h-20" src="img/Vector%202%20(1).png" alt="" />
                        </span>
                    </h1>

                    <div className="relative">
                        <img src="img/Hero-sectionimage.png" className="h-[60rem] mx-auto mt-[-9rem] z-10" alt="HEROIMAGE" />
                        <div className="absolute -bottom-120 inset-0 flex items-center justify-center z-20">
                            <div className="flex items-center space-x-8 bg-white/40 backdrop-blur-md rounded-full py-3 px-4 shadow-md">
                                <a href="#" className="bg-orange-500 text-white py-5 px-15 rounded-full flex items-center space-x-1 hover:bg-orange-600">
                                    <span>Portfolio</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5m0 0H9m10.5 0V15" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/omoghene-efekemo-2a2467261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-orange-600 hover:text-orange-700">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpageback;
