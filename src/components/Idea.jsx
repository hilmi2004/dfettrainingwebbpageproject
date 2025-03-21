import React from 'react';
import {FaLetterboxd, FaSquareLetterboxd} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa";

const Idea = () => {
    return (
        <div>
            <div className="bg-black py-6 min-h-screen  flex flex-col items-center justify-center max-w-screen w-screen overflow-hidden">
                <div className="container mx-auto text-center text-white">
                    <h1 className="text-6xl font-semibold">
                        Have an Awesome Project Idea? <br />
                        <span className="text-orange-500">Let's Discuss</span>
                    </h1>

                    {/* Input Field Section */}
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex items-center border-2 border-orange-500 rounded-full overflow-hidden">
                            <div className="bg-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full ml-2">
                                <FaEnvelope className="text-orange-500 text-2xl"/>
                            </div>
                            <input
                                type="email"
                                className="w-[45rem] h-[6rem] rounded-full pl-4 text-gray-100 outline-none"
                                placeholder="Enter Email Address"
                            />
                            <button className="bg-orange-500 text-white px-10 py-6 rounded-full mr-2">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Idea;
