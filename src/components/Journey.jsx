import React from 'react';

const Journey = () => {
    return (
        <div className="mx-auto py-4 min-h-screen max-w-screen overflow-hidden w-screen px-4">
            <div className="container mx-auto">
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-center">
                    My Recent <span className="text-orange-500">Work Experience</span>
                </h2>
                <div className="mt-6 flex flex-wrap justify-center items-center gap-10 lg:space-x-10">
                    <div className="space-y-16 md:space-y-36 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">DFET, Abuja</h3>
                            <p className="text-gray-500 text-base md:text-lg">Sep 2016 - July 2020</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">Virtual Business Assist, Remote</h3>
                            <p className="text-gray-500 text-base md:text-lg">Sep 2020 - July 2023</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">FECA, Benin</h3>
                            <p className="text-gray-500 text-base md:text-lg">Sep 2023</p>
                        </div>
                    </div>
                    <div className="flex justify-center w-full lg:w-auto">
                        <img src="img/myrecentwomo.png" alt="Work Experience" className="max-w-full h-auto" />
                    </div>
                    <div className="space-y-16 md:space-y-36 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">Product Designer</h3>
                            <p className="text-gray-500 text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe sunt ut?</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">Brand Designer</h3>
                            <p className="text-gray-500 text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe sunt ut?</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-4xl font-semibold text-black mb-3">Graphics Designer</h3>
                            <p className="text-gray-500 text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia saepe sunt ut?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journey;
