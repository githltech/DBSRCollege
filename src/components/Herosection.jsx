import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2",
    },
    {
      id: 2,
      image:
        "https://media1.thrillophilia.com/filestore/c4ptxkldlkubiw14mh90eb2dspl5_shutterstock_1071877145.jpg?w=340&dpr=2",
    },
    {
      id: 3,
      image:
        "https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=360&dpr=2",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div>
      {/* Static Left Side Content */}
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between px-8 z-10">
        {/* Left Side */}
        <div className="text-left w-full sm:w-1/2 flex flex-col justify-center space-y-4 pl-12">
          <hr className="border-t-2 border-orange-500 w-32" />
          <p className="text-white text-2xl">Welcome to DBSR University</p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-white font-bold leading-snug">
            ABOUT <br /> UNIVERSITY
          </h1>
          <p className="text-white text-lg sm:text-xl font-semibold">
            Empowering the leaders of tomorrow with world-class education.
          </p>
          <a
            href="/"
            className="w-40 bg-red-700 text-white px-3 py-2 rounded-md text-lg font-semibold hover:bg-black transition duration-300"
          >
           Get Started&rarr;
          </a>
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-1/3 bg-[#2B334F] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Application Form
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Mobile No"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none bg-white text-black"
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none bg-white text-black"
            >
              <option value="">Select Branch</option>
              <option value="engineering">Engineering</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
            <button
              type="submit"
              className="w-full bg-red-700 text-white px-4 py-3 rounded-md font-bold hover:bg-black transition duration-300"
            >
              Apply Now &rarr;
            </button>
          </form>
        </div>
      </div>

      {/* Image Slider */}
      <div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-[75vh] sm:max-h-fit lg:min-h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
