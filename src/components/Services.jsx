import React from 'react';

const Services = () => {
    return (
        <div className="bg-[url('https://img.freepik.com/premium-photo/close-up-row-black-white-lines-with-picture-line-black-white-lines_994023-354573.jpg?w=360')] bg-no-repeat bg-cover min-h-screen w-full overflow-hidden text-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-0">
                        My <span className="text-orange-500">Expertise</span>
                    </h2>
                    <p className="font-semibold text-base sm:text-lg md:text-base max-w-md md:ml-8">
                        Design Tomorrow's Interface today, with well-tailored research
                    </p>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-10">
                    <ServiceCard
                        title="UI Design"
                        description="I collaborate with you to craft a seamless and engaging user interface for your new business. From in-depth research to intuitive design, I ensure a visually appealing and user-friendly experience that enhances your brand's identity and functionality."
                        imgSrc="img/Mockup%2012%20(2).png"
                    />
                    <ServiceCard
                        title="Branding"
                        description="I work with you to create a meaningful and intuitive user experience for your new business. Through thorough research and strategic design, I ensure a seamless, user-centered journey that enhances engagement, usability, and overall satisfaction."
                        imgSrc="img/Mockup%2013.png"
                    />
                    <ServiceCard
                        title="UX Design"
                        description="I work with you to create a meaningful and intuitive user experience for your new business. Through thorough research and strategic design, I ensure a seamless, user-centered journey that enhances engagement, usability, and overall satisfaction."
                        imgSrc="img/Mockup%2015.png"
                    />
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ title, description, imgSrc }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl sm:rounded-4xl shadow-md border border-white hover:scale-105 transition-transform duration-300 w-full max-w-md overflow-hidden">
            <div className="py-6 sm:py-8 px-6 sm:px-10 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{title}</h2>
                <p className="text-sm sm:text-base tracking-wide leading-relaxed">{description}</p>
            </div>
            <img
                className="w-full h-auto rounded-b-3xl sm:rounded-b-4xl"
                src={imgSrc}
                alt={title}
                loading="lazy"
            />
        </div>
    );
};

export default Services;