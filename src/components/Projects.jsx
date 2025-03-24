import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    { id: 1, img: "img/portomofolio.png" },
    { id: 2, img: "img/chicflowomo.png" },
    { id: 3, img: "img/educonnectright.jpg" },
    { id: 4, img: "img/edusecondright.png" },
    { id: 5, img: "img/utififinanceomo.png" },
    { id: 6, img: "img/dexbubbleomo.png" }
];

const Projects = () => {
    const [isCarousel, setIsCarousel] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false); // Fix for first load issue
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    // Ensure Projects section appears on first render
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Fix Swiper navigation buttons disappearing
    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [isCarousel]);

    if (!isLoaded) return null; // Prevent blank screen issue

    return (
        <div className="bg-white py-5 min-h-screen max-w-screen w-screen overflow-hidden">
            <div className="container mx-auto px-4 mt-10">
                {/* Header & Button */}
                <div className="lg:flex space-y-4 lg:justify-between items-center">

                    <h2 className="text-6xl">
                        Let's have a look at <br />
                        my <span className="text-orange-500">Projects</span>
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-500 text-white rounded-full lg:w-[10rem] w-full h-[5rem] font-bold transition-all"
                        onClick={() => setIsCarousel(!isCarousel)}
                    >
                        {isCarousel ? "See Less" : "See All"}
                    </motion.button>
                </div>

                <AnimatePresence mode="wait">
                    {/* Grid View */}
                    {!isCarousel && (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-8 grid-rows-11 gap-4 mt-5"
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`overflow-hidden shadow-xl rounded-lg ${
                                        index === 0
                                            ? "col-span-4 row-span-2"
                                            : index === 1
                                                ? "col-span-4 row-span-5 col-start-5"
                                                : index === 2
                                                    ? "col-span-4 row-span-3 row-start-3"
                                                    : index === 3
                                                        ? "col-span-8 row-span-3 row-start-6"
                                                        : index === 4
                                                            ? "col-span-4 row-span-3 row-start-9"
                                                            : "col-span-4 row-span-3 col-start-1 row-start-9"
                                    }`}
                                >
                                    <img className="w-full h-full object-cover rounded-lg" src={project.img} alt="Project" />
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Carousel View */}
                    {isCarousel && (
                        <motion.div
                            key="carousel"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="relative mt-10"
                        >
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                modules={[Pagination, Navigation]}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="w-full"
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            className="w-full h-[450px] flex items-center justify-center overflow-hidden shadow-xl rounded-lg"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <img
                                                className="w-auto max-w-[90%] max-h-[90%] object-contain rounded-lg"
                                                src={project.img}
                                                alt="Project"
                                            />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons */}
                            <button
                                ref={prevRef}
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black z-10"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                ref={nextRef}
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black z-10"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className=" lg:flex lg:flex-col mt-7 lg:items-center text-center lg:mx-[25rem]">
                <h1 className="text-[48px] font-bold text-gray-600">
                    Utifi - Financial Solution
                </h1>

                <p className="mt-5 text-[20px] tracking-wide">Utifi Finance Mobile application is my most recent design project. It’s a <br/>
                    financial app where all kinds of transactions can be carried out like airtime <br/>
                    and daata recharge, buying and gifting Giftcards and lots more.</p>
            </div>
        </div>
    );
};

export default Projects;
