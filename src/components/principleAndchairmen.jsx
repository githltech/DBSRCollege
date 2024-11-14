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
    description: `"With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation.With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation.With over 20 years of experience, Dr. Doe leads our institution with a vision of excellence and innovation. Dr. Doe leads our institution with a vision of excellence and innovation.."`,
    imageUrl: "https://www.inspirationschoolkgm.org/images/MrAnurag%20Mathur2022_HOME.jpg", // Replace with a relevant image URL
  },
  {
    name: "Mr. Jane Smith",
    title: "Chairman",
    description: `"Mr. Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights.Mr. Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights.Mr. Smith has been instrumental in guiding our institution towards a brighter future with his strategic insights"`,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXsd_yT6FdxH5GTz_7rJvp-__YoxIECY7Sw&s", // Replace with a relevant image URL
  },
  // Add more profiles as needed
];

const PrincipleAndchairmen = () => {
  return (
    <section className=" py-10" id="leadership">
      <div className=" px-6 text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Leadership</h2>
        <p className="text-gray-600 text-sm mt-2">
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
            <div className="flex flex-col sm:flex-row gap-6 bg-white shadow-lg  p-6">
              <img
                src={profile.imageUrl}
                alt={profile.name}
                className="sm:w-1/3 sm:h-80 h-full  object-cover shadow-md "
              />
             <div className="">
             <h3 className="text-2xl font-semibold text-red-600">{profile.name}</h3>
              <p className="text-indigo-600 font-medium mb-2">{profile.title}</p>
              <p className="text-gray-800 font-semibold">{profile.description}</p>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PrincipleAndchairmen;
