import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Landingpageback = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="relative mx-20 flex flex-col items-center justify-center mt-10 ">
                <div className="relative">
                    <h4 className="border-2 border-black p-3 rounded-3xl w-[7rem] text-center">
                        Hello
                    </h4>
                    {/*<img className="absolute -top-6 -right-5 h-[2rem]" src="img/Vector%202.png" alt="" />*/}
                </div>
                <div className="text-center">
                    <h1 className="text-8xl font-semibold leading-tight relative">
                        I'm <span className="text-orange-600">Kemo</span>,<br />
                        <div className="typewriter" id="typewriter">Product Designer</div>

                    </h1>

                    <div className="relative flex flex-col items-center">
                        <div
                            className="relative inline-block cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src="img/Kemo%2058.png" className=" w-full h-[50rem] mx-auto mt-[-14rem] z-10 relative" alt="HEROIMAGE" />

                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-xl shadow-lg w-80 text-center z-30 border border-gray-200"
                                    >
                                        <h3 className="text-xl font-semibold text-orange-600">Hi, I'm Kemo!</h3>
                                        <p className="text-sm text-gray-600 mt-2">I'm a brand identity and product  Designer (Adobe Illustrator & Figma)
                                            with a focus on helping brands stand out with clear, strong identities
                                            and easy-to-use products that are visually appealing, and responsive.
                                            Even though I have been creating desgins for over 6 years,
                                            I still love it as if it was something new.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-10 absolute top-0 flex items-center space-x-8 bg-white/40 backdrop-blur-md rounded-full py-3 px-4 shadow-md z-[20] mt-100">
                            <a href="#" className="bg-orange-500 text-white py-3 px-6 rounded-full flex items-center space-x-1 hover:bg-orange-600">
                                <span>Portfolio</span>

                            </a>
                            <a href="https://www.linkedin.com/in/omoghene-efekemo-2a2467261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-orange-600 hover:text-orange-700">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpageback;
