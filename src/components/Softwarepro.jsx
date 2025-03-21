import React from 'react';

const Softwarepro = () => {
    return (
        <div className="min-h-screen bg-white w-screen max-w-screen mt-6 py-6 overflow-hidden">
            <div className="container mx-auto px-4">
                <h3 className="text-center font-bold text-lg tracking-wide mb-6">
                    <span className="mr-4">_</span> About Me
                </h3>
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            className=" w-full object-cover "
                            src="img/Screenshot%202025-02-16%20102648.png"
                            alt="About Me"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Who is <span className="text-orange-500"> Omoghene <br className="hidden md:block"/> Efekemo?</span>
                        </h1>
                        <p className="tracking-wide leading-relaxed text-lg mt-5 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis deleniti eos eum excepturi impedit
                            itaque laudantium magni numquam odio officiis, qui quos repellendus similique sit tempore ullam voluptates voluptatum.
                        </p>
                        <h3 className="text-center mt-10 text-gray-400 font-semibold text-lg">
                            The tools and technologies I am really good at:
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center mt-6 text-center text-gray-600">
                            {[
                                { src: "img/coreldraw-logo-2871394B44-seeklogo.com.png", name: "Coreldraw" },
                                { src: "img/canvalogog.jfif", name: "Canva" },
                                { src: "img/Figma-Emblem.png", name: "Figma" },
                                { src: "img/png-transparent-photoshop-cc-hd-logo-thumbnail.png", name: "Adobe Photoshop" },
                                { src: "img/ADOBEPREMIERE.png", name: "Adobe Premiere Pro" },
                                { src: "img/adobeillustrator.png", name: "Adobe Illustrator" }
                            ].map((tool, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain" src={tool.src} alt={tool.name} />
                                    <p className="mt-2 text-sm sm:text-base">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                        <a href="public/EFEKEMO%20VICTORY%20OMOGHENE-%20CV%20(1)%20(1).pdf" download={"My_Cv.pdf"}>
                            <div
                                className="bg-black w-[20rem] h-[5rem] rounded-full flex  ml-50 space-x-3 mt-[3rem] ">

                                <img src="img/arrowomogot-removebg-preview.png" className="w-20" alt=""/>
                                <button className="bg-orange-500 rounded-full w-full">Download CV</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Softwarepro;
