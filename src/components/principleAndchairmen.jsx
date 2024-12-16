import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const leadershipProfiles = [
  {
    name: "Dr. John Doe",
    title: "Principal",
    description: `"With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation.With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation.With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation. Dr. Doe leads our institution with a vision of excellence and innovation.Dr. Doe leads our institution with a vision of excellence and innovation. Dr. Doe leads our institution with a vision of excellence and innovation.Dr. Doe leads our institution with a vision of excellence and innovation. Dr. Doe leads our institution with a vision of excellence and innovation."`,
    imageUrl: "https://www.jsspublicschoolbage.com/jss/wp-content/uploads/2022/05/Image_3-1.png",
  },
  {
    name: "Mr. Jane Smith",
    title: "Chairman",
    description: `"Mr. Jane Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights.Mr. Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights.Mr. Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights.Dr. Doe leads our institution with a vision of excellence and innovation. Dr. Doe leads our institution with a vision of excellence and innovation.Dr. Doe leads our institution with a vision of excellence and innovation."`,
    imageUrl: "https://induschampsschool.edu.in/wp-content/uploads/2020/02/1-1-scaled-1000x499.jpg",
  },
];

const PrincipleAndchairmen = () => {
  return (
    <section className=" sm:px-0 py-10 bg-black lg:px-24 " id="leadership" >
      <div className=" px-6 text-center sm:px-0">
        <h2 className="text-3xl font-bold text-white">Our Leadership</h2>
        <p className="text-white text-sm mt-2">
          Meet the leaders driving our institution’s vision and growth.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-full w-full px-6"
      >
        {leadershipProfiles.map((profile, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-10">
              <div className="relative">
              <div class="absolute px-5 top-[-30px] left-[-30px] w-full h-full border-[13px] border-red-600"></div>
              <img
                src={profile.imageUrl}
                alt={profile.name}
                className="w-full h-full object-cover shadow-md relative"
              />
              </div>          
             <div className="">
             <h3 className="text-3xl font-semibold text-white">{profile.name}</h3>
              <p className="text-red-500 font-medium mb-2">{profile.title}</p>
              <p className="text-white font-sans mb-5 text-xs sm:text-sm">{profile.description}</p>

              <div class="relative inline-block mt-4">
             <a href='/' class="relative bg-red-700 text-white px-4 py-2 font-semibold focus:outline-none overflow-hidden group">
             <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
            <span class="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
            <span class="relative z-10">View Details &rarr;</span>
            </a>
          </div>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PrincipleAndchairmen;
