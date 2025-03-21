// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import { ChevronLeft, ChevronRight } from "lucide-react";
//
// const projects = [
//     { title: "Data Analysis",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks", image: "img/adi-goldstein-EUsVwEOsblE-unsplash.jpg" },
//     { title: "Mobile/Web Dev",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "UI/UX Design",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "Cyber Security",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "Cloud Computing",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "AI & ML",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "Blockchain",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" },
//     { title: "Software Testing",desc:"Learn Mobile/Web Development with industry experts and practical projects.", completetime:"Duration : 12 Weeks",  image: "https://via.placeholder.com/600" }
// ];
//
// const ProjectCarousel = () => {
//     return (
//         <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
//             <Swiper
//                 effect="coverflow"
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={3} // Controls how many slides are visible at once
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 200,
//                     modifier: 2.5,
//                     slideShadows: false
//                 }}
//                 loop={true}
//                 navigation={{
//                     nextEl: ".next-btn",
//                     prevEl: ".prev-btn"
//                 }}
//                 modules={[EffectCoverflow, Navigation]}
//                 className="w-full max-w-7xl"
//             >
//                 {projects.map((project, index) => (
//                     <SwiperSlide key={index} className="relative group">
//                         <div className="relative w-full h-[500px] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
//                             <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full h-full object-cover rounded-2xl shadow-xl"
//                             />
//
//                             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-2xl"></div>
//                             <h1 className="absolute top-0  left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
//                                 {project.title}
//                             </h1>
//                             <h2 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm">
//                                 {project.desc}
//                             </h2>
//                             <h2 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm">
//                                 {project.completetime}
//                             </h2>
//
//
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//
//             {/* Navigation Buttons */}
//             <button className="prev-btn absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black transition-all">
//                 <ChevronLeft size={30} />
//             </button>
//             <button className="next-btn absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black transition-all">
//                 <ChevronRight size={30} />
//             </button>
//         </div>
//     );
// };
//
// export default ProjectCarousel;
