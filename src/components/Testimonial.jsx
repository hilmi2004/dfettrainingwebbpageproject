import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Precious Aibokon",
        title: "Head of PR, Media, and Logistics at FECA Nigeria",
        date: "March 1, 2025",
        review:
            "I had the pleasure of working with Christopher on a project for the National Platform Committee. He demonstrated exceptional skills in building and marketing innovative solutions.",
        rating: 5,
    },
    {
        name: "Fawzi Sayed",
        title: "UI/UX Designer",
        review:
            "The team exceeded my expectations! Their designs are modern, creative, and highly user-friendly. Highly recommend their work.",
        rating: 5,
    },
    {
        name: "Fawzi Sayed",
        title: "UI/UX Designer",
        review:
            "The team exceeded my expectations! Their designs are modern, creative, and highly user-friendly. Highly recommend their work.",
        rating: 5,
    },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="flex flex-col items-center text-center py-10 px-4">
            <h2 className="text-5xl font-semibold">
                Testimonials That <br /> <span className="text-orange-500">Speak Results</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl text-[18px]">
                Hear from those who have experienced our work firsthand. See what our
                clients have to say about how we’ve helped them achieve their goals.
            </p>

            <div className="relative mt-8 w-full max-w-3xl">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                    ❮
                </button>

                <div className="relative bg-black text-white rounded-lg p-6 mx-10 z-20">

                    <FaQuoteLeft className="absolute top-2 left-2 text-7xl text-white text-gray-400 " />

                    <h3 className="text-lg font-bold">{testimonials[activeIndex].name}</h3>
                    <p className="text-sm text-gray-300">{testimonials[activeIndex].title}</p>
                    <p className="mt-4">{testimonials[activeIndex].review}</p>

                    <div className="flex items-center justify-center mt-3">
                        {Array.from({ length: testimonials[activeIndex].rating }).map(
                            (_, index) => (
                                <FaStar key={index} className="text-orange-400" />
                            )
                        )}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
                >
                    ❯
                </button>
            </div>

            <div className="mt-4 flex space-x-2">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2 w-2 rounded-full ${
                            index === activeIndex ? "bg-orange-500" : "bg-gray-300"
                        } cursor-pointer`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
