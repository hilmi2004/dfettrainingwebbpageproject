import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    { id: 1, img: "img/portomofolio.png", title: "Portfolio Design", desc: "Modern portfolio design showcasing creative work" },
    { id: 2, img: "img/chicflowomo.png", title: "Chicflow", desc: "E-commerce platform for fashion enthusiasts" },
    { id: 3, img: "img/educonnectright.jpg", title: "EduConnect", desc: "Educational platform connecting students and tutors" },
    { id: 4, img: "img/edusecondright.png", title: "EduConnect Mobile", desc: "Mobile version of the educational platform" },
    { id: 5, img: "img/utififinanceomo.png", title: "Utifi Finance", desc: "Financial app for seamless transactions" },
    { id: 6, img: "img/dexbubbleomo.png", title: "DexBubble", desc: "Cryptocurrency trading platform" }
];

const Projects = () => {
    const [isCarousel, setIsCarousel] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, [isCarousel]);

    if (!isLoaded) return null;

    return (
        <div className="bg-white py-10 min-h-screen w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header & Button */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-6">
                    <h2 className="text-4xl text-black sm:text-5xl md:text-6xl font-bold leading-tight">
                        Let's have a look at <br />
                        my <span className="text-orange-500">Projects</span>
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 text-white rounded-full w-full lg:w-[10rem] h-[4rem] sm:h-[5rem] font-bold transition-all hover:bg-orange-600"
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
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-11 gap-4 mt-8"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className={`overflow-hidden shadow-xl rounded-lg relative group ${
                                        index === 0
                                            ? "lg:col-span-4 lg:row-span-2"
                                            : index === 1
                                                ? "lg:col-span-4 lg:row-span-5 lg:col-start-5"
                                                : index === 2
                                                    ? "lg:col-span-4 lg:row-span-3 lg:row-start-3"
                                                    : index === 3
                                                        ? "lg:col-span-8 lg:row-span-3 lg:row-start-6"
                                                        : index === 4
                                                            ? "lg:col-span-4 lg:row-span-3 lg:row-start-9"
                                                            : "lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-9"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={project.img}
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                        <p className="text-white text-sm">{project.desc}</p>
                                    </div>
                                </motion.div>
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
                                            className="w-full h-[300px] sm:h-[400px] md:h-[450px] flex flex-col items-center justify-center overflow-hidden shadow-xl rounded-lg bg-gray-100"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <img
                                                className="w-auto max-w-[90%] max-h-[80%] object-contain rounded-lg"
                                                src={project.img}
                                                alt={project.title}
                                                loading="lazy"
                                            />
                                            <div className="mt-4 text-center">
                                                <h3 className="text-xl font-bold">{project.title}</h3>
                                                <p className="text-gray-600">{project.desc}</p>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons */}
                            <button
                                ref={prevRef}
                                className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black z-10 transition-colors"
                            >
                                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                            </button>
                            <button
                                ref={nextRef}
                                className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black z-10 transition-colors"
                            >
                                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-col mt-10 sm:mt-14 items-center text-center mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-gray-600">
                        Utifi - Financial Solution
                    </h1>
                    <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-[20px] tracking-wide text-gray-600">
                        Utifi Finance Mobile application is my most recent design project. It's a
                        financial app where all kinds of transactions can be carried out like airtime
                        and data recharge, buying and gifting Giftcards and lots more.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;