import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Importing Images
import AdilImage from "../images/Adil.jpg";
import AliyaHumaAnsariImage from "../images/AliyaHumaAnsari.jpg";
import AnanyaBisenImage from "../images/AnanyaBisen.jpg";
import SandeepBindraImage from "../images/SandeepBindra.jpg";
import SayaliRathodImage from "../images/SayaliRathod.jpg";
import ShailBalaKindarleImage from "../images/ShailBalaKindarle.jpg";
import ShailendraKawreImage from "../images/ShailendraKawre.jpg";
import ShikhaSingAndupeImage from "../images/ShikhaSingAndupe.jpg";


const teamMembers = [
  {
    name: "Dr. Adil",
    title: "Professor of Mathematics",
    qualifications: "Advanced Calculus",
    image :AdilImage,
  },
  {
    name: "Dr. Aliya Huma Ansari",
    title: "Associate Professor of Physics",
    qualifications: "Quantum Mechanics",
    image: AliyaHumaAnsariImage,
  },
  {
    name: "Dr. Ananya Bisen",
    title: "Assistant Professor of Computer Science",
    qualifications: "Data Structures & Algorithms",
    image: AnanyaBisenImage,
  },
  {
    name: "Dr. Sandeep Bindra",
    title: "Professor of Chemistry",
    qualifications: "Organic Chemistry",
    image: SandeepBindraImage,
  },
  {
    name: "Dr. Sayali Rathod",
    title: "Associate Professor of History",
    qualifications: "Modern History",
    image: SayaliRathodImage,
  },
  {
    name: "Dr. Shail Bala Kindarle",
    title: "Professor of Biology",
    qualifications: "Cell Biology",
    image: ShailBalaKindarleImage,
  },
  {
    name: "Dr. Shailendra Kawre",
    title: "Professor of Mechanical Engineering",
    qualifications: "Thermodynamics",
    image: ShailendraKawreImage,
  },
  {
    name: "Dr. Shikha Sing Andupe",
    title: "Professor of English",
    qualifications: "World Literature",
    image: ShikhaSingAndupeImage,
  },
];

const FacultyDetails = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-10 bg-gray-200 lg:px-24">
      <div className="text-center">
        <h2 className="text-orange-600 font-semibold px-4">
          YOUR COLLEGE JOURNEY, OUR COMMITMENT: GET TO KNOW THE TEAM SHAPING YOUR FUTURE
        </h2>
        <h1 className="text-4xl font-bold mt-2">OUR TEAM</h1>
        <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 mb-8"></div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={scrollLeft}
            className="hidden sm:block absolute left-24 p-2 bg-gray-800 text-white shadow-lg hover:bg-gray-700"
          >
            <FaArrowLeft />
          </button>

          {/* Centering Container */}
          <div className="overflow-hidden w-full max-w-5xl mx-auto flex justify-center">
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide py-4"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="min-w-[220px] max-w-[220px] bg-white shadow-red-100 p-6 shadow-lg text-center mx-auto border border-gray-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-28 mx-auto rounded-lg border border-gray-200 object-cover mb-4 hover:scale-110 duration-700"
                  />
                  <h3 className="text-lg font-semibold h-12">{member.name}</h3>
                  <p className="text-sm text-blue-600 h-10">{member.title}</p>
                  <p className="text-sm text-gray-500 mt-2">{member.qualifications}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="hidden sm:block absolute right-24 p-2 bg-gray-800 text-white shadow-lg hover:bg-[#2B334F]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacultyDetails;
