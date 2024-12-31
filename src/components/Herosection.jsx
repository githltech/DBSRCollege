import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?ga=GA1.1.1589028456.1727074417&semt=ais_hybrid",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/large-university-building-with-sign-that-says-university-america_551880-7781.jpg?ga=GA1.1.1589028456.1727074417&semt=ais_hybrid",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/wideangle-photography-view-university-main-building-large-building-with-green-lawn-grass-field_551880-7779.jpg?ga=GA1.1.1589028456.1727074417&semt=ais_hybrid",
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
    <div className="relative">
      {/* Static Left Side Content */}
      <div className="absolute inset-0 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-4 z-10">
        {/* Left Side */}
        <div className="text-left w-full sm:w-1/2 flex flex-col justify-center space-y-4 pl-4 sm:pl-8 md:pl-12 sm:items-start sm:justify-center md:items-start md:justify-center">
          <p className="text-white text-xl sm:text-2xl mt-10">Welcome to </p>
          <hr className="border-t-2 border-orange-500 w-20 sm:w-28" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-snug">
            DBSR<br />COLLEGE
            <hr className="border-t-2 border-orange-500 w-16 sm:w-24 md:w-32" />
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
            Empowering the leaders of tomorrow with world-class education.
          </p>
          <a
            href="/"
            className="w-32 sm:w-40 bg-red-700 text-white px-3 py-2 rounded-md text-sm sm:text-lg font-semibold hover:bg-black transition duration-300"
          >
            Get Started &rarr;
          </a>
        </div>

        {/* Form Section */}
        <div className="hidden lg:block w-full sm:w-1/3 bg-transparent p-8 rounded-lg shadow-lg border-2 border-[#2B334F]">
          <h2 className="text-2xl font-bold text-[#2B334F] mb-6 text-center">
            Application Form
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B334F] focus:outline-none bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B334F] focus:outline-none bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Mobile No"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B334F] focus:outline-none bg-white text-black"
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B334F] focus:outline-none bg-white text-black"
            >
              <option value="">Select Branch</option>
              <option value="engineering">Engineering</option>
              <option value="pharmacy">Pharmacy</option>
            </select>
            <button
              type="submit"
              className="w-full bg-[#2B334F] text-white px-4 py-3 rounded-md font-bold hover:bg-black transition duration-300"
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
                className="w-full h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover object-center sm:object-top md:object-center lg:object-bottom"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
