import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Image URLs for the slider
const bannerImages = [
  {
    url: "https://dbsrcollege.in/wp-content/uploads/2023/06/headerImgae.jpg",
    title: `Welcome To DBSR University`,
    description: "Empowering the leaders of tomorrow with world-class education.",
  },

  {
    url: "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Welcome to DBSR",
    description: "Empowering the leaders of tomorrow with world-class education.",
  },
  
  {
    url: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?cs=srgb&dl=pexels-pixabay-256490.jpg&fm=jpg",
    title: "Vibrant Campus Life",
    description: "Experience a campus life that blends learning with fun.",
  },
  {
    url: "https://collegeinfogeek.com/wp-content/uploads/2016/08/first-year-of-college-myths-featured.jpg",
    title: "State-of-the-Art Facilities",
    description: "Our facilities provide a perfect environment for learning and growth.",
  },
];

const Herosection = () => {
  return (
    <section className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index}>
           
         {/* Herosection banner */}
       <div className="relative bg-cover bg-center h-64 sm:h-80 lg:h-screen" style={{ backgroundImage: `url(${banner.url})` }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col justify-center items-center text-center">
          <span className="text-sm uppercase text-red-500 bg-white border-gray-200 p-1 font-semibold tracking-widest mb-2">About Campus</span>
          <h1 className=" text-2xl sm:text-4xl text-white font-semibold">{banner.title}</h1>
          <p className="text-white mt-2 max-w-xl mx-auto text-xs sm:text-xl">
           {banner.description}
          </p> 
          
         <div className="flex gap-4 mt-4">
         <div class="relative inline-block">
         <a href="/" class="relative bg-red-700 text-white px-4 py-2 font-semibold focus:outline-none overflow-hidden group">
         <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
         <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
         <span class="relative z-10">Apply Now &rarr;</span>
        </a>
        </div>

<div class="relative inline-block">
  <a href="/" class="relative bg-black text-white px-4 py-2 font-semibold focus:outline-none overflow-hidden group">
    <span class="absolute inset-0 bg-red-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
    <span class="absolute inset-0 bg-red-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
    <span class="relative z-10">Application form &rarr;</span>
  </a>
</div>

         </div>
        </div>
      </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Herosection;
