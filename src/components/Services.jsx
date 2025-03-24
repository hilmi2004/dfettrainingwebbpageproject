import React from 'react';

const Services = () => {
    return (
        <div className="bg-[url('https://img.freepik.com/premium-photo/close-up-row-black-white-lines-with-picture-line-black-white-lines_994023-354573.jpg?w=360')] bg-no-repeat bg-cover min-h-screen w-screen max-w-screen overflow-hidden text-white py-10 px-5">
            <div className="container mx-auto">
                <div className="text-center md:text-left md:flex lg:justify-between items-center md:justify-between md:items-center mb-10">
                    <h2 className="text-4xl text-white md:text-5xl font-semibold">
                        My <span className="text-orange-500">Expertise</span>
                    </h2>
                    <p className="font-semibold mt-4 md:mt-0 md:ml-11 text-lg text-white md:text-base">
                        Design Tomorrow Interface today, with well-tailored research
                    </p>
                </div>
                <div className="mt-20 lg:flex justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
                    <ServiceCard
                        title="UI Design"
                        description="I collaborate with you to craft a seamless and engaging user interface for your new business. From in-depth research to intuitive design, I ensure a visually appealing and user-friendly experience that enhances your brand’s identity and functionality."
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
        <div className="bg-white/10 backdrop-blur-md rounded-4xl shadow-md border border-white hover:scale-105 transition-transform duration-300 max-w-md">
            <div className="py-9 px-10 text-white">
                <h2 className="mb-8 text-4xl">{title}</h2>
                <p className="tracking-wide">{description}</p>
            </div>
            <img className="rounded-4xl w-full" src={imgSrc} alt={title} />
        </div>
    );
};

export default Services;
